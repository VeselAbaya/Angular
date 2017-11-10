import {Injectable} from "@angular/core";
import {TodoModel} from "../models/todo.model";

@Injectable()
export class TodoService {

  constructor() {}

  getTodos() {
    return [
      new TodoModel({id: 1, name: 'ToDo1', checked: false}),
      new TodoModel({id: 2, name: 'ToDo2', checked: false}),
      new TodoModel({id: 3, name: 'ToDo3', checked: false})
    ];
  }
}
