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
var router_1 = require('@angular/router');
var OneReviewComponent = (function () {
    function OneReviewComponent(_reviewService, _route) {
        this._reviewService = _reviewService;
        this._route = _route;
    }
    OneReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.map(function (params) { return params['id']; }).subscribe(function (id) {
            _this._reviewService.getOneReview(id).subscribe(function (review) {
                _this.review = review;
                console.log(review);
            });
        });
    };
    OneReviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'one-review',
            templateUrl: 'one-review.component.html'
        }), 
        __metadata('design:paramtypes', [reviews_service_1.ReviewsService, router_1.ActivatedRoute])
    ], OneReviewComponent);
    return OneReviewComponent;
}());
exports.OneReviewComponent = OneReviewComponent;
//# sourceMappingURL=one-review.component.js.map