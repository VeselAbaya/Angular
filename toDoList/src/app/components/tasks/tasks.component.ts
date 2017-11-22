import {Component, Input} from '@angular/core';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css']
})

export class TasksComponent {
  @Input() tasks: Array<TaskModel> = [];

  editingIndex = null;

  toggle(index: number) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  edit(index: number, editedTask: string) {
    if (editedTask) {
      this.tasks[index].title = editedTask;
      this.editingIndex = null;
    }

    this.toggle(index);
  }

  startEditing(index: number) {
    this.toggle(index);
    this.editingIndex = index;
  }
}
