import {Injectable} from '@angular/core';
import {TaskModel} from '../models/task.model';

@Injectable()
export class TaskService {
  constructor() {}

  getTasks() {
    return [
      new TaskModel('buy milk'),
      new TaskModel('buy Bread'),
      new TaskModel('buy Gun')
    ];
  }
}
