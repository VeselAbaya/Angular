import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {AddFormComponent} from '../add-form/add-form.component';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'add-page',
  templateUrl: 'add-page.component.html',
  styleUrls: ['add-page.component.css']
})

export class AddPageComponent {
  addForms: Array<FormGroup> = [];

  constructor(private taskService: TaskService) {}

  addForm() {
    this.addForms.push(new FormGroup({
      addTask: new FormControl('', Validators.required),
      subTasks: new FormArray([])
    }));
  }

  handleSubmit(formGroups: Array<FormGroup>) {
    for (const formGroup of formGroups) {
      const subTasksFormLenght = (formGroup.get('subTasks') as FormArray).length;

      const task: TaskModel = new TaskModel({title: formGroup.get('addTask').value,
                                             complete: false,
                                             subTasks: []});

      for (let i = 0; i !== subTasksFormLenght; ++i) {
        task.subTasks[i] = new TaskModel({title: (formGroup.get('subTasks') as FormArray).at(i).value,
                                          complete: false,
                                          subTasks: []});
      }

      this.taskService.addTask(task);
      formGroup.reset();
    }
  }
}