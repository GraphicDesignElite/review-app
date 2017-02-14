import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewsService } from './services/reviews.service'


import { AppComponent }  from './app.component';
import { AllReviewsComponent }  from './components/all-reviews/all-reviews.component';

import { routing } from './app.routing';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, NavbarComponent, AllReviewsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ReviewsService ]
})
export class AppModule { }
