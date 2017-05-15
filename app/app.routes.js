"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("../app/home/home.component");
var introduce_component_1 = require("../app/home2/introduce/introduce.component");
var blog_component_1 = require("../app/home2/blog/blog.component");
var contact_component_1 = require("../app/home2/contact/contact.component");
var product_component_1 = require("../app/home2/product/product.component");
var experience_component_1 = require("../app/home2/experience/experience.component");
var partner_component_1 = require("../app/home2/partner/partner.component");
var fanpage_component_1 = require("../app/home2/fanpage/fanpage.component");
var flmeaning_component_1 = require("../app/home2/flmeaning/flmeaning.component");
var productdetails_component_1 = require("../app/home2/productdetails/productdetails.component");
var MODULE_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'introduce', component: introduce_component_1.IntroduceComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'flmeaning', component: experience_component_1.ExperienceComponent },
    { path: 'partner', component: partner_component_1.PartnerComponent },
    { path: 'fanpage', component: fanpage_component_1.FanpageComponent },
    { path: 'flmeaningid', component: flmeaning_component_1.FlMeaningComponent },
    { path: 'productid', component: productdetails_component_1.ProductDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.MODULE_COMPONENT = router_1.RouterModule.forRoot(MODULE_ROUTES);
//# sourceMappingURL=app.routes.js.map