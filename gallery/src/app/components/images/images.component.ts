import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
  @Input() images: Array<ImageModel> = [];
  private formats: Array<string> = [];

  private visible_images: Array<ImageModel> = [];
  private sorting_button_checked: string = null;
  private showonly_button_checked: string = null;
  private slidermode_on = false;

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.imageService.getImages()
      .then(res => {
        this.images = res;
        for (const image of this.images) {
          const format = image.name.match(/\.[a-zA-Z0-9]+/)[0];
          if (!this.formats.includes(format)) {
            this.formats.push(format);
          }
        }

        this.visible_images = this.images;
      });
  }

  sorting_button_check(criteria: string) {
    this.sorting_button_checked = criteria;
  }

  showonly_button_check(criteria: string) {
    if (this.showonly_button_checked === criteria) {
      this.showonly_button_checked = null;
      this.visible_images = this.images;
    } else {
      this.showonly_button_checked = criteria;
    }
  }

  remove_filters() {
    this.showonly_button_checked = null;
    this.visible_images = this.images;
  }

  slidermode_toggle() {
    this.slidermode_on = !this.slidermode_on;
  }

  show_only(format: string) {
    this.visible_images = this.images.filter(image => image.name.match(/\.[a-zA-Z0-9]+/)[0] === format);
    this.showonly_button_check(format);
  }

  sorting(criteria: string) {
    if (criteria === 'name') {
      this.visible_images.sort((left, right) => {
        if (left.name < right.name) {
          return -1;
        } else if (left.name === right.name) {
          return 0;
        } else {
          return 1;
        }
      });
    } else if (criteria === 'format') {
      this.visible_images.sort((left, right) => {
        if (left.name.match(/\.[a-zA-Z0-9]+/)[0] < right.name.match(/\.[a-zA-Z0-9]+/)[0]) {
          return -1;
        } else if (left.name.match(/\.[a-zA-Z0-9]+/)[0] === right.name.match(/\.[a-zA-Z0-9]+/)[0]) {
          return 0;
        } else {
          return 1;
        }
      });
    } else if (criteria === 'date') {
      this.visible_images.sort((left, right) => {
        if (left.date < right.date) {
          return -1;
        } else if (left.date === right.date) {
          return 0;
        } else {
          return 1;
        }
      });
    }

    this.sorting_button_check(criteria);
  }
}
