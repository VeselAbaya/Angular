export class ImageModel {
  id: number;
  name: string;
  date: Date;
  src: string;

  constructor(other: ImageModel) {
    this.id = other.id;
    this.name = other.name;
    this.date = other.date;
    this.src = other.src;
  }
}
