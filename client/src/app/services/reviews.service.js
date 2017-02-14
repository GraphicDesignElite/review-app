"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
var ReviewsService = (function () {
    function ReviewsService(_http, _activatedRoute, _router) {
        this._http = _http;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.apiHost = 'http://localhost:5000/api/v1/';
        console.log('Review Services Are Ready');
    }
    ReviewsService.prototype.getAllReviews = function () {
        console.log('Getting All Reviews');
        return this._http.get(this.apiHost + 'reviews')
            .map(function (res) { return res.json(); });
    };
    ReviewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], ReviewsService);
    return ReviewsService;
}());
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map