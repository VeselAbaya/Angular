import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskService } from "./services/task.service";
import { FormsModule } from "@angular/forms"; //Заимпортировал и теперь при нажатии на enter
                                              //срабатывает add;

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
