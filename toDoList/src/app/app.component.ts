import { Component } from '@angular/core';

interface ITask {
  title: string;
  complete: boolean;
  isEditing: false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  tasks = [
    { title: 'Milk', complete: false, isEditing: false},
    { title: 'Bread', complete: true, isEditing: false},
    { title: 'Gun', complete: false, isEditing: false}
  ];

  add(title: string) {
    if (title.localeCompare('')) {
      this.tasks.push({
        title,
        complete: false,
        isEditing: false
      });
    }
  }

  addByEnter(event, title: string) { // Объясни, пожалуйста, как сделать проще без этой кучи функций отдельно
                                     // Для кнопок и отдельно для enter'а
    if (event.keyCode === 13) {
      this.add(title);
    }
  }

  toggle(index: number) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  edit(index: number, editedTask: string) {
    this.toggle(index);
    this.tasks[index].isEditing = !this.tasks[index].isEditing;
    if (editedTask.localeCompare('')) {
      this.tasks[index].title = editedTask;
    }
  }

  editByEnter(event, i, editedTask) {
    if (event.keyCode === 13) {
      this.toggle(i);
      this.edit(i, editedTask);
    }
  }

}
