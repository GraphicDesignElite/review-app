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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var reviews_service_1 = require('./services/reviews.service');
var google_service_1 = require('./services/google.service');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var about_component_1 = require('./components/about/about.component');
var home_page_component_1 = require('./components/home-page/home-page.component');
var search_results_component_1 = require('./components/search-results/search-results.component');
var all_reviews_component_1 = require('./components/all-reviews/all-reviews.component');
var one_review_component_1 = require('./components/one-review/one-review.component');
var rating_display_component_1 = require('./components/rating-display/rating-display.component');
var search_bar_component_1 = require('./components/search-bar/search-bar.component');
var clean_output_pipe_1 = require('./pipes/clean-output.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                home_page_component_1.HomePageComponent,
                search_results_component_1.SearchResultsComponent,
                navbar_component_1.NavbarComponent,
                all_reviews_component_1.AllReviewsComponent,
                one_review_component_1.OneReviewComponent,
                rating_display_component_1.RatingDisplayComponent,
                search_bar_component_1.SearchBarComponent,
                clean_output_pipe_1.CleanOutput
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [reviews_service_1.ReviewsService, google_service_1.GoogleService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map