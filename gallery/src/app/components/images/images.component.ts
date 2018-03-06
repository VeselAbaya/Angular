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

  fullsize(index: number) {
    this.states[index] = (this.states[index] === 'small' ? 'large' : 'small');
  }

  // full_size() {
  //   // language=JQuery-CSS
  //   let lastImage = null;
  //   let modal = jQuery(this._elRef.nativeElement).find('#modal');
  //   jQuery(this._elRef.nativeElement).find('.image').on('click', function(e) {
  //     if (lastImage) {
  //       lastImage.css('opacity', 1);
  //     }
  //
  //     let jthis = jQuery(e.target);
  //     modal.css({
  //       'top'     : Math.round(parseInt(jthis.offset().top, 1)),
  //       'left'    : Math.round(parseInt(jthis.offset().left, 1)),
  //       'width'   : Math.round(jthis.width()),
  //       'height'  : Math.round(jthis.height()),
  //       'opacity' : 1,
  //       'display' : 'block',
  //       'position': 'absolute',
  //       'z-index' : 50
  //     });
  //     modal.attr('src', jthis.attr('src'));
  //     jthis.css('opacity', 0);
  //
  //     lastImage = jthis;
  //
  //     modal.animate({
  //       'top': Math.round((window.innerHeight) / 2 - jthis.height()),
  //       'left': Math.round((window.innerWidth) / 2 - jthis.width()),
  //       'width': Math.round(jthis.width() * 2),
  //       'height': Math.round(jthis.height() * 2)
  //     }, 800);
  //
  //     modal.on('click', function(e) {
  //       modal.animate({
  //         'top'    : Math.round(parseInt(lastImage.offset().top, 1)),
  //         'left'   : Math.round(parseInt(lastImage.offset().left, 1)),
  //         'width'  : Math.round(lastImage.width()),
  //         'height' : Math.round(lastImage.height()),
  //       }, 800);
  //       modal.css('display', 'none');
  //
  //       jthis.css('opacity', 1);
  //     });
  //   });
  // }

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
