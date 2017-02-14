"use strict";
var router_1 = require('@angular/router');
var all_reviews_component_1 = require('./components/all-reviews/all-reviews.component');
var appRoutes = [
    {
        path: 'reviews',
        component: all_reviews_component_1.AllReviewsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/reviews'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map