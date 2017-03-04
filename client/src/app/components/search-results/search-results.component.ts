import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../../services/google.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent implements OnInit{
    searchResults:any;

    constructor( private _googleservice: GoogleService, private _route: ActivatedRoute  ){}

    ngOnInit(){
       this._route.queryParams.subscribe(data => {
            let searchTerms = this.cleanInput(data['search']);
            this._googleservice.getPlaceByName(searchTerms).subscribe(searchResults =>{
                this.searchResults = JSON.parse(searchResults); // parse results
                this.searchResults = this.searchResults.results; // clean results
                console.log(this.searchResults); // remove
                

            });
       });
    }
    cleanInput(search:string):string{
        let cleanedResults = search.toLowerCase().replace(/[^a-zA-Z0-9\s]*$/, "");
        cleanedResults = cleanedResults.replace(/[+]/g, " ").trim(); // remove + from search terms
        return cleanedResults;
    }
}
