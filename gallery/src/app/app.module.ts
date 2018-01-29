import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {RouterModule} from "@angular/router";
import {ImagesComponent} from "./components/images/images.component";
import {ImagesService} from "./services/images.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ImagesComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
