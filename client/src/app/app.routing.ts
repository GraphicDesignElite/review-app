import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {AllReviewsComponent} from './components/all-reviews/all-reviews.component';
import {OneReviewComponent} from './components/one-review/one-review.component';


const appRoutes: Routes = [
    {
        path:'recent',
        component: AllReviewsComponent
    },
    {
        path:'review/:id',
        component: OneReviewComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: '**', 
        pathMatch: 'full',
        redirectTo:'/recent'
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);