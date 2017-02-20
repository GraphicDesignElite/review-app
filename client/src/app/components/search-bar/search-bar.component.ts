import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleService } from '../../services/google.service';

@Component({
    moduleId: module.id,
    selector: 'search-bar',
    templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent{
    
    searchQuery:string;
    searchResults:any[];

    constructor( private _googleservice: GoogleService ){}  

    search(){
        this._googleservice.getPlaceByName(this.searchQuery).subscribe(searchResults =>{
            this.searchResults = searchResults;
            console.log(this.searchResults);
        });
    }
}