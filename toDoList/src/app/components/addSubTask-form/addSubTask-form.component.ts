import {Component} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {FormArray, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'addSubTaskForm',
  templateUrl: 'addSubTask-form.component.html',
  styleUrls: ['addSubTask-form.component.css']
})

export class AddSubTaskComponent {
  constructor(private taskService: TaskService) {}

  addSubTaskForm: FormGroup = new FormGroup({
    'subTasks': new FormArray([
      new FormControl()
    ])
  });
}
