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
var reviews_service_1 = require('../../services/reviews.service');
var AllReviewsComponent = (function () {
    function AllReviewsComponent(_reviewService) {
        this._reviewService = _reviewService;
    }
    AllReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._reviewService.getAllReviews().subscribe(function (res) {
            _this.allReviews = res;
        });
    };
    AllReviewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'all-reviews',
            templateUrl: 'all-reviews.component.html'
        }), 
        __metadata('design:paramtypes', [reviews_service_1.ReviewsService])
    ], AllReviewsComponent);
    return AllReviewsComponent;
}());
exports.AllReviewsComponent = AllReviewsComponent;
//# sourceMappingURL=all-reviews.component.js.map