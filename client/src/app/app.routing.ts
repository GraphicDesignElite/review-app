import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutComponent} from './components/about/about.component';
import { SearchResultsComponent }  from './components/search-results/search-results.component';

import {AllReviewsComponent} from './components/all-reviews/all-reviews.component';
import {OneReviewComponent} from './components/one-review/one-review.component';


const appRoutes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path:'review/:id',
        component: OneReviewComponent
    },
    {
        path:'search-results/:query',
        component: SearchResultsComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: '**', 
        pathMatch: 'full',
        redirectTo:'/'
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);