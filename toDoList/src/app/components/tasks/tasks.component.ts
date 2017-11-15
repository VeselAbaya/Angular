import {Component, Input} from '@angular/core';
import {TaskModel} from "../../models/task.model";

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css']
})

export class TasksComponent {
  @Input() tasks: Array<TaskModel> = [];

  toggle(index: number) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  edit(index: number, editedTask: string) {
    this.toggle(index);
    this.tasks[index].isEditing = true;
    if (editedTask.localeCompare('')) {
      this.tasks[index].title = editedTask;
      this.tasks[index].isEditing = false;
    }
  }

  editByEnter(event, i, editedTask) {
    if (event.keyCode === 13) {
      this.toggle(i);
      this.edit(i, editedTask);
    }
  }

  startEdit(index, isEditing) {
    if (index % 2 === 0) {
      isEditing = false;
    } else { isEditing = true; }
  }
}
