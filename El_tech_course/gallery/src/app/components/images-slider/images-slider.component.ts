import {Component, Input, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {ImageModel} from '../../models/image.model';

@Component({
  selector: 'app-image-slider',
  templateUrl: 'images-slider.component.html',
  styleUrls: ['images-slider.component.css']
})

export class ImagesSliderComponent implements OnInit {
  @Input() images: Array<ImageModel>;
  public carouselOne: NgxCarousel;

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }
}
