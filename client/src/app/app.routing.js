"use strict";
var router_1 = require('@angular/router');
var home_page_component_1 = require('./components/home-page/home-page.component');
var about_component_1 = require('./components/about/about.component');
var search_results_component_1 = require('./components/search-results/search-results.component');
var one_review_component_1 = require('./components/one-review/one-review.component');
var appRoutes = [
    {
        path: '',
        component: home_page_component_1.HomePageComponent
    },
    {
        path: 'review/:id',
        component: one_review_component_1.OneReviewComponent
    },
    {
        path: 'search-results/:query',
        component: search_results_component_1.SearchResultsComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map