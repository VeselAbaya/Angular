import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ImageModel} from '../models/image.model';

@Injectable()
export class ImagesService {
  private id = 0;

  constructor(private httpClient: HttpClient) {}

  newId(): number {
    return this.id++;
  }

  getImages(): Promise<Array<ImageModel>> {
    return this.httpClient.get('api/images')
      .toPromise()
      .then(res => {
        // console.log(res);
        this.id = res.length;
        return res.map((item) => new ImageModel(item));
      });
  }

  postImage(image: ImageModel): Promise<any> {
    return this.httpClient.post('api/images', JSON.stringify(image),
                                { headers: this.getJsonHeaders() })
      .toPromise();
  }

  private getJsonHeaders() {
    return new HttpHeaders({
      'Content-type': 'application/json'
    });
  }
}
