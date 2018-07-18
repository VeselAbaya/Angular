import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImagesService} from '../../services/images.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  animations: [
    trigger('image_fullsize_animation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in'))
    ])
  ]
})

export class ImagesComponent implements OnInit {
  @Input() images: Array<ImageModel> = [];
  private formats: Array<string> = [];

  private states: Array<string> = [];
  private visible_images: Array<ImageModel> = [];
  private selected_images: Array<ImageModel> = [];
  private sorting_button_checked: string = null;
  private showonly_button_checked: string = null;
  private slidermode_on = false;

  constructor(private imageService: ImagesService, private _elRef: ElementRef) {}

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
        for (let i = 0; i !== this.images.length; ++i) {
          this.states.push('small');
        }
      });
  }

  select_image(img: ImageModel) {
    const index = this.selected_images.findIndex((image) => img.id === image.id);
    if (index === -1) {
      this.selected_images.push(img);
    } else {
      this.selected_images.splice(index, 1);
    }
  }

  slidermode_toggle() {
    this.slidermode_on = !this.slidermode_on;
  }

  showonly_button_check(criteria: string) {
    if (this.showonly_button_checked === criteria) {
      this.showonly_button_checked = null;
      this.visible_images = this.images;
    } else {
      this.showonly_button_checked = criteria;
    }
  }

  show_only(format: string) {
    this.visible_images = this.images.filter(image => image.name.match(/\.[a-zA-Z0-9]+/)[0] === format);
    this.showonly_button_check(format);
  }

  sorting_button_check(criteria: string) {
    this.sorting_button_checked = criteria;
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

  remove_filters() {
    this.showonly_button_checked = null;
    this.visible_images = this.images;
  }
}
