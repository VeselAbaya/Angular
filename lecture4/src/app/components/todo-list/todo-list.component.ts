import {TodoModel} from '../../models/todo.model';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  @Input() todoList: Array<TodoModel> = [];
  @Output() todoClicked: EventEmitter<number> = new EventEmitter<number>();

  todoClick(id: number) {
    this.todoClicked.emit();
  }


}
