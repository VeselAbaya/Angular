import {Component,  HostListener} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ImagesService} from '../../services/images.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-add-form',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})

export class AddFormComponent {
  addForm: FormGroup;
  constructor(private imagesService: ImagesService) {
    this.addForm = new FormGroup({
      'image': new FormControl()
    });
  }

  // handleFileSelect(event) {
  //   const file: File = event.target.files[0];
  //
  //   saveAs(file);
  //   // Only process image files.
  //   if (!file.type.match('image.*')) {
  //     console.error('It is not an image');
  //   }
  //
  //   const reader = new FileReader();
  //
  //   // Closure to capture the file information.
  //   reader.onload = function(event) {
  //     // The file's text will be printed here
  //     console.log(event.target.result);
  //   };
  //
  //   saveAs(reader.readAsArrayBuffer(file), 'image.png');
  // }

  @HostListener('change')
  onChange() {
    const file: File = event.target.files[0];
    saveAs(file, file.name);
    this.imagesService.postImage({id: this.imagesService.newId(),
                                        name: file.name,
                                        date: new Date(),
                                        src: 'assets/img/' + file.name});
    dispatchEvent(new Event('submit'));
  }
}
