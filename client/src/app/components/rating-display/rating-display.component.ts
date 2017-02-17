import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'rating-display',
    templateUrl: 'rating-display.component.html'
})
export class RatingDisplayComponent implements OnInit{

    @Input() rating:string;
    constructor(){}
    
    ngOnInit(){
        
        
    }
}