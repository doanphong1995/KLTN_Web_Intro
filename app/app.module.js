"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var home_component_1 = require("../app/home/home.component");
var introduce_component_1 = require("../app/home2/introduce/introduce.component");
var blog_component_1 = require("../app/home2/blog/blog.component");
var blogid_component_1 = require("../app/home2/blogid/blogid.component");
var contact_component_1 = require("../app/home2/contact/contact.component");
var product_component_1 = require("../app/home2/product/product.component");
var experience_component_1 = require("../app/home2/experience/experience.component");
var partner_component_1 = require("../app/home2/partner/partner.component");
var fanpage_component_1 = require("../app/home2/fanpage/fanpage.component");
var flmeaning_component_1 = require("../app/home2/flmeaning/flmeaning.component");
var productdetails_component_1 = require("../app/home2/productdetails/productdetails.component");
var header_component_1 = require("../app/home2/header/header.component");
var footer_component_1 = require("../app/home2/footer/footer.component");
var angular2_infinite_scroll_1 = require("angular2-infinite-scroll");
//import { CategoryService } from '../app/home2/product/category.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.MODULE_COMPONENT, http_1.HttpModule, angular2_infinite_scroll_1.InfiniteScrollModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, introduce_component_1.IntroduceComponent,
            header_component_1.HeaderComponent, footer_component_1.FooterComponent, blog_component_1.BlogComponent, contact_component_1.ContactComponent,
            product_component_1.ProductComponent, experience_component_1.ExperienceComponent, partner_component_1.PartnerComponent, fanpage_component_1.FanpageComponent,
            flmeaning_component_1.FlMeaningComponent, productdetails_component_1.ProductDetailsComponent, blogid_component_1.BlogIDComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map