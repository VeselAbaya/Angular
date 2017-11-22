import {Injectable} from '@angular/core';
import {TaskModel} from '../models/task.model';

@Injectable()
export class TaskService {

  private tasks: Array<TaskModel> = [];

  constructor() {
    this.tasks = [
      new TaskModel('buy milk'),
      new TaskModel('buy Bread'),
      new TaskModel('buy Gun')
    ];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    if (title) {
      this.tasks.push(new TaskModel(title));
    }
  }
}
