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

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.imageService.getImages()
      .then(res => {
        this.images = res;
      });
  }
}
