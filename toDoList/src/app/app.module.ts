import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TasksComponent } from './components/tasks/tasks.component';
import {TaskService} from './services/task.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //Заимпортировал и теперь при нажатии на enter
                                                                 //срабатывает add-form;
import {AddFormComponent} from './components/add-form/add-form.component';
import {AddSubTaskComponent} from './components/addSubTask-form/addSubTask-form.component';
import {RouterModule} from '@angular/router';
import {AddPageComponent} from './components/add-page/add-page.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AuthGuard} from "./services/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddFormComponent,
    AddSubTaskComponent,
    AddPageComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TasksComponent
      },
      {
        path: 'addpage',
        component: AddPageComponent,
        canDeactivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [TaskService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
