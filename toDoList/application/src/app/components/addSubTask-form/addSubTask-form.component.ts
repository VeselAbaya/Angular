import {Component, Input} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {FormArray, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'addSubTaskForm',
  templateUrl: 'addSubTask-form.component.html',
  styleUrls: ['addSubTask-form.component.css']
})

export class AddSubTaskComponent {
  @Input() taskId: number = null;

  constructor(private taskService: TaskService) {}

  get subTasks(): FormArray { return this.addSubTaskForm.get('subTasks') as FormArray; }

  addSubTaskForm: FormGroup = new FormGroup({
    'subTasks': new FormArray([])
  });

  addForm() {
    this.subTasks.push(new FormControl(''));
  }

  addSubTask(taskId: number, form_index: number) { // form_index - индекс формы в subTasks
    if (this.subTasks.at(form_index).value) {
      this.taskService.addSubTask(taskId, {title: this.subTasks.at(form_index).value,
                                                     complete: false});
    }

    this.subTasks.removeAt(form_index);
  }
}
