import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RatingDisplayComponent } from '../../components/rating-display/rating-display.component';

@Component({
    moduleId: module.id,
    selector: 'one-review',
    templateUrl: 'one-review.component.html'
})
export class OneReviewComponent implements OnInit{
    review: any;

    constructor(private _reviewService: ReviewsService, private _route:ActivatedRoute){ }
    
    ngOnInit(){
        this._route.params.map(params => params['id']).subscribe(id => {
            this._reviewService.getOneReview(id).subscribe(review =>{
                    this.review = review; 
                    console.log(review); 
            });
        });
        
    }
}