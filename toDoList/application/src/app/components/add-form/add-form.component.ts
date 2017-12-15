import {Component, Input} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'addForm',
  templateUrl: 'add-form.component.html',
  styleUrls: ['add-form.component.css']
})

export class AddFormComponent {
  @Input() addForm: FormGroup = new FormGroup({
    addTask: new FormControl('', Validators.required),
    subTasks: new FormArray([])
  });

  constructor(private taskService: TaskService) {}

  get subTasks(): FormArray { return this.addForm.get('subTasks') as FormArray; }

  add(formGroup: FormGroup) {
    console.log(this.taskService.newId());
    const subTasksFormLenght = this.subTasks.length;

    const task: TaskModel = new TaskModel({id: this.taskService.newId(),
                                           title: formGroup.get('addTask').value,
                                           complete: false,
                                           subTasks: []});

    for (let i = 0; i !== subTasksFormLenght; ++i) {
      if (this.subTasks.at(i).value) {
        task.subTasks.push({title: this.subTasks.at(i).value,
                            complete: false});
      }
    }

    this.taskService.addTask(task)
      .then();
    this.addForm.reset();
  }

  addSubTaskForm() {
    this.subTasks.push(new FormControl(''));
  }

  removeSubTaskForm(index: number) {
    this.subTasks.removeAt(index);
  }
}
