import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ReviewsService{
    private apiHost: string = 'http://localhost:5000/api/v1/';
    
    constructor(private _http : Http, private _activatedRoute:ActivatedRoute, private _router: Router ){ 
        console.log('Review Services Are Ready');
    }

    getAllReviews(){
        console.log('Getting All Reviews');
        return this._http.get(this.apiHost + 'reviews')
        .map(res=>res.json());
    }

}