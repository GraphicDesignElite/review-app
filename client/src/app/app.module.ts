import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { routing } from './app.routing';
import { ReviewsService } from './services/reviews.service';
import { GoogleService } from './services/google.service';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomePageComponent }  from './components/home-page/home-page.component';
import { SearchResultsComponent }  from './components/search-results/search-results.component';


import { AllReviewsComponent }  from './components/all-reviews/all-reviews.component';
import { OneReviewComponent }  from './components/one-review/one-review.component';

import { RatingDisplayComponent }  from './components/rating-display/rating-display.component';
import { SearchBarComponent }  from './components/search-bar/search-bar.component';

import { CleanOutput } from './pipes/clean-output.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ 
                  AppComponent,
                  AboutComponent,
                  HomePageComponent,
                  SearchResultsComponent,
                  NavbarComponent,
                  AllReviewsComponent,
                  OneReviewComponent,
                  RatingDisplayComponent,
                  SearchBarComponent,
                  CleanOutput
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ ReviewsService, GoogleService ]
})
export class AppModule { }
