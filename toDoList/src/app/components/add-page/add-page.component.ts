import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'add-page',
  templateUrl: 'add-page.component.html',
  styleUrls: ['add-page.component.css']
})

export class AddPageComponent {
  addForms: Array<FormGroup> = [];
  submitted = true;

  constructor(private taskService: TaskService) {}

  addForm() {
    this.addForms.push(new FormGroup({
      addTask: new FormControl('', Validators.required),
      subTasks: new FormArray([])
    }));

    this.submitted = false;
  }

  handleSubmit(formGroups: Array<FormGroup>) {
    for (const formGroup of formGroups) {
      const subTasksFormLength = (formGroup.get('subTasks') as FormArray).length;

      const task: TaskModel = new TaskModel({title: formGroup.get('addTask').value,
                                             complete: false,
                                             subTasks: []});

      for (let i = 0; i !== subTasksFormLength; ++i) {
        if ((formGroup.get('subTasks') as FormArray).at(i).value) {
          task.subTasks.push(new TaskModel({
            title: (formGroup.get('subTasks') as FormArray).at(i).value,
            complete: false,
            subTasks: []
          }));
        }
      }

      this.taskService.addTask(task);
      formGroup.reset();
    }

    this.submitted = true;
  }

  isEmpty(): boolean {
    for (const formGroup of this.addForms) {
      if (formGroup.get('addTask').value) { return false; }
    }

    return true;
  }
}
