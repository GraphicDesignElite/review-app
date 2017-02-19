import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class GoogleService{
    private apiHost: string = 'http://localhost:5000/api/google/';
    
    constructor(private _http : Http, private _activatedRoute:ActivatedRoute, private _router: Router ){ 
        console.log('Google Services Are Ready');
    }
    getPlaceByName(name:string){
        return this._http.get(this.apiHost + 'places/search/' + name)
        .map(res=>res.json());
    }
    
}