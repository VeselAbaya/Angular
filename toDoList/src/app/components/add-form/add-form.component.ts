import {Component} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'addForm',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})

export class AddFormComponent {
  constructor(private taskService: TaskService) {}

  addForm: FormGroup = new FormGroup({
    addTask: new FormControl('', Validators.required)
  });

  add(formGroup: FormGroup) {
    this.taskService.addTask(formGroup.get('addTask').value);
    this.addForm.reset();
  }
}
