import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CounterComponent} from "./components/counter/counter.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoService} from "./services/todo.services";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
