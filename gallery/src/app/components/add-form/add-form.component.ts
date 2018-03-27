import {Component, HostListener, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ImagesService} from '../../services/images.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-add-form',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})

export class AddFormComponent {
  @Input() addForm: FormGroup = new FormGroup({
    'image': new FormControl('')
  });

  constructor(private imagesService: ImagesService) {}

  @HostListener('change')
  onChange() {
    const file: File = event.target.files[0];
    this.imagesService.postImage({id: this.imagesService.newId(),
                                        name: file.name,
                                        date: new Date(),
                                        src: 'assets/img/' + file.name});
    dispatchEvent(new Event('submit'));
  }
}
