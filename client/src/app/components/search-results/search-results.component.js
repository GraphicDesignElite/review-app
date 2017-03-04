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
var core_1 = require('@angular/core');
var google_service_1 = require('../../services/google.service');
var router_1 = require('@angular/router');
var SearchResultsComponent = (function () {
    function SearchResultsComponent(_googleservice, _route) {
        this._googleservice = _googleservice;
        this._route = _route;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (data) {
            var searchTerms = _this.cleanInput(data['search']);
            _this._googleservice.getPlaceByName(searchTerms).subscribe(function (searchResults) {
                _this.searchResults = JSON.parse(searchResults); // parse results
                _this.searchResults = _this.searchResults.results; // clean results
                console.log(_this.searchResults); // remove
            });
        });
    };
    SearchResultsComponent.prototype.cleanInput = function (search) {
        var cleanedResults = search.toLowerCase().replace(/[^a-zA-Z0-9\s]*$/, "");
        cleanedResults = cleanedResults.replace(/[+]/g, " ").trim(); // remove + from search terms
        return cleanedResults;
    };
    SearchResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-results',
            templateUrl: 'search-results.component.html'
        }), 
        __metadata('design:paramtypes', [google_service_1.GoogleService, router_1.ActivatedRoute])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map