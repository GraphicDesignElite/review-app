import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { RatingDisplayComponent } from '../../components/rating-display/rating-display.component';

@Component({
    moduleId: module.id,
    selector: 'all-reviews',
    templateUrl: 'all-reviews.component.html'
})
export class AllReviewsComponent implements OnInit{
    
    allReviews : any[]; // TODO review model
    constructor(private _reviewService: ReviewsService ){ }
    
    ngOnInit(){
        this._reviewService.getAllReviews().subscribe(res=>{
                this.allReviews = res;
                console.log(this.allReviews)
        });
    }
}