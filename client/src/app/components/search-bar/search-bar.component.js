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
var SearchBarComponent = (function () {
    function SearchBarComponent(_googleservice) {
        this._googleservice = _googleservice;
        this.searching = false;
        this.searchQuery = " ";
    }
    SearchBarComponent.prototype.search = function () {
        var _this = this;
        this.searching = true;
        this._googleservice.getPlaceByName(this.searchQuery).subscribe(function (searchResults) {
            _this.searchResults = searchResults;
            console.log(_this.searchResults);
        });
        this.searching = false;
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-bar',
            templateUrl: 'search-bar.component.html'
        }), 
        __metadata('design:paramtypes', [google_service_1.GoogleService])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map