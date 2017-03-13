import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'rating-display',
    templateUrl: 'rating-display.component.html'
})
export class RatingDisplayComponent implements OnInit{
    maxScore = Array(5).fill(4);

    @Input() rating:string;
    constructor(){}
    
    ngOnInit(){
             
    }
    displayStar(x:string):string{
        if(parseInt(this.rating) > parseInt(x)){
            return 'full';
        }else if(parseInt(this.rating) < parseInt(x) &&
                 parseInt(this.rating) > (parseInt(x) - 1)){
            return 'half';
        }
        else{
            return 'none';
        }
    }
    
}