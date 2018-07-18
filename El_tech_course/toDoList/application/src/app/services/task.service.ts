import {Injectable} from '@angular/core';
import {SubTask, TaskModel} from '../models/task.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class TaskService {
  private id = 0;
  // private tasks: Array<TaskModel> = [];

  // constructor() {
  //   this.tasks = [
  //     new TaskModel( {id: 0, title: 'buy milk', complete: false, subTasks: []})
  //   ];
  // }

  constructor(private httpClient: HttpClient) {}

  // getTasks() {
  //   return this.tasks;
  // }

  getTask(id: Number): Promise<TaskModel> {
    const url
      = 'api/todos/' + id.toString();
    return this.httpClient.get(url)
      .toPromise()
      .then((res) => {
        return res[id];
      });
  }

  getTasks(): Promise<Array<TaskModel>> {
    return this.httpClient.get('api/todos')
      .toPromise()
      .then((res) => {
        this.id = res.length;
        return res.map((item) => new TaskModel(item));
      });
  }

  // addTask(task: TaskModel) {
  //   if (task.title) {
  //     this.tasks.push(task);
  //   }
  // }  2i` qi

  addTask(task: TaskModel): Promise<any> {
    return this.httpClient.post('api/todos', JSON.stringify(task),
                                { headers: this.getJsonHeaders() })
      .toPromise();
  }

  edit(id: number, task: TaskModel) {
    return this.httpClient.put('api/todos/?id=0', JSON.stringify(task),
                               { headers: this.getJsonHeaders() })
      .toPromise();
  }

  addSubTask(id: number, subTask: SubTask): Promise<any> {
    const url = 'api/todos/' + id.toString();
    return this.httpClient.put(url, JSON.stringify(subTask),
                                { headers: this.getJsonHeaders() })
      .toPromise();
  }

  newId(): number {
    return ++this.id;
  }

  remove(id: number): Promise<any> {
    console.log(id);
    return this.httpClient.delete('api/todos/:id',
                                  { headers: this.getJsonHeaders(),
                                           /*params: new HttpParams().set('id', id.toString()) */})
      .toPromise();
  }

  private getJsonHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json'
    });
  }
}
