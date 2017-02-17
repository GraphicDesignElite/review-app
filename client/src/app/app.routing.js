"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./components/about/about.component');
var all_reviews_component_1 = require('./components/all-reviews/all-reviews.component');
var one_review_component_1 = require('./components/one-review/one-review.component');
var appRoutes = [
    {
        path: 'recent',
        component: all_reviews_component_1.AllReviewsComponent
    },
    {
        path: 'review/:id',
        component: one_review_component_1.OneReviewComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/recent'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map