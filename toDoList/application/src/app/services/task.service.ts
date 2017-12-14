import {Injectable} from '@angular/core';
import {SubTask, TaskModel} from '../models/task.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TaskService {
  private id = 0;
  // private tasks: Array<TaskModel> = [];

  // constructor() {
  //   this.tasks = [
  //     new TaskModel({id: 0, title: 'buy milk', complete: false, subTasks: []})
  //   ];
  // }

  constructor(private httpClient: HttpClient) {}

  // getTasks() {
  //   return this.tasks;
  // }

  getTasks()/*: Promise<Array<TaskModel>>*/ {
    return this.httpClient.get('api/todos')
      .toPromise()
      .then((res) => {
        this.id = res.lenght;
        return res.map((item) => new TaskModel(item));
      });
  }

  // addTask(task: TaskModel) {
  //   if (task.title) {
  //     this.tasks.push(task);
  //   }
  // }

  addTask(task: TaskModel): Promise<any> {
    return this.httpClient.post('api/todos', JSON.stringify(task),
                                { headers: this.getJsonHeaders() })
      .toPromise();
  }

  edit(index: number, task: TaskModel) {
    return this.httpClient.put('api/tasks/?id=0', JSON.stringify(task),
                               { headers: this.getJsonHeaders() })
      .toPromise();
  }

    addSubTask(index: number, subTask: SubTask): Promise<any> {
    const url = 'api/tasks/?id=' + index.toString();
    return this.httpClient.post(url, JSON.stringify(subTask),
                                { headers: this.getJsonHeaders() })
      .toPromise();
  }

  newId(): number {
    return this.id++;
  }

  private getJsonHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json'
    });
  }
}
