import { Component, OnInit } from '@angular/core';
import { TaskModel } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks: Array<TaskModel>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  add(title: string) {
    if (title.localeCompare('')) {
      this.tasks.push(new TaskModel(title));
    }
  }

  addByEnter(event, title: string) { // Объясни, пожалуйста, как сделать проще без этой кучи функций отдельно
    // Для кнопок и отдельно для enter'а
    if (event.keyCode === 13) { this.add(title); }
  }
}
