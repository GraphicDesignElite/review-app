import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';


@Component({
    moduleId: module.id,
    templateUrl: 'all-reviews.component.html'
})
export class AllReviewsComponent implements OnInit{
    allReviews : any[];

    constructor(private _reviewService: ReviewsService ){

    }
    ngOnInit(){
        this._reviewService.getAllReviews().subscribe(res=>{
                this.allReviews = res;
                console.log(this.allReviews)
        });
    }
}