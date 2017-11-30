import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CounterComponent} from "./components/counter/counter.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoService} from "./services/todo.service";
import {AddFormComponent} from "./components/add-form/add-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CounterComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
