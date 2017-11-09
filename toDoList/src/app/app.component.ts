import { Component } from '@angular/core';

class Task {
  title: string;
  complete: boolean;
  isEditing: boolean;

  constructor(title, complete = false) {
    this.title = title;
    this.complete = false;
    this.isEditing = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks = [
    new Task('buy milk'),
    new Task('buy Bread'),
    new Task('buy Gun')
  ];

  add(title: string) {
    if (title.localeCompare('')) {
      this.tasks.push(new Task(title));
    }
  }

  addByEnter(event, title: string) { // Объясни, пожалуйста, как сделать проще без этой кучи функций отдельно
                                     // Для кнопок и отдельно для enter'а
    if (event.keyCode === 13) { this.add(title); }
  }

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

}
