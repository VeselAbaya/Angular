import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {RouterModule} from '@angular/router';
import {ImagesComponent} from './components/images/images.component';
import {ImagesService} from './services/images.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './directives/tooltip/tooltip.directive';
import {AddFormComponent} from './components/add-form/add-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {ImagesSliderComponent} from "./components/images-slider/images-slider.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ImagesComponent,
    AddFormComponent,
    TooltipDirective,
    ImagesSliderComponent
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
