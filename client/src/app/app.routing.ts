import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllReviewsComponent} from './components/all-reviews/all-reviews.component';
const appRoutes: Routes = [
    {
        path:'reviews',
        component: AllReviewsComponent
    },
    {
        path: '**', 
        pathMatch: 'full',
        redirectTo:'/reviews'
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);