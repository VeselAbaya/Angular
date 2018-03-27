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
import {ConfirmGuard} from './services/confirm.guard';
import {TooltipDirective} from './directives/tooltip/tooltip.directive';
import {TimeoutDirective} from './directives/timeout/timeout.directive';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddFormComponent,
    AddSubTaskComponent,
    AddPageComponent,
    AppHeaderComponent,
    TooltipDirective,
    TimeoutDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TasksComponent
      },
      {
        path: 'addpage',
        component: AddPageComponent,
        canDeactivate: [ConfirmGuard]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [TaskService, ConfirmGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
