import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ImageModel} from '../models/image.model';

@Injectable()
export class ImagesService {
  private id = 0;

  constructor(private httpClient: HttpClient) {}

  getImages(): Promise<Array<ImageModel>> {
    return this.httpClient.get('api/images')
      .toPromise()
      .then((res) => {
        // console.log(res);
        this.id = res.length;
        return res.map((item) => new ImageModel(item));
      });
  }
}
