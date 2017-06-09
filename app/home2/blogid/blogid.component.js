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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var blog_service_1 = require("../blog/blog.service");
var getRamdom_service_1 = require("../blog/getRamdom.service");
require("rxjs/add/operator/filter");
var BlogIDComponent = (function () {
    function BlogIDComponent(blogService, router, getRandomBlogService, activeRoute) {
        var _this = this;
        this.blogService = blogService;
        this.router = router;
        this.getRandomBlogService = getRandomBlogService;
        this.activeRoute = activeRoute;
        this.listBlog = [];
        this.listRandomBlog = [];
        //Code constructor
        router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (val) {
            _this.onChangeUrl();
        });
        this.LoadRandomBlog();
    }
    BlogIDComponent.prototype.onChangeUrl = function () {
        var _this = this;
        this.subscription = this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.blogService.GetDetailBlog(this.id).subscribe(function (response) {
            console.log(_this.id);
            _this.listBlog.push(response);
            console.log(_this.listBlog);
        });
    };
    BlogIDComponent.prototype.LoadRandomBlog = function () {
        var _this = this;
        this.getRandomBlogService.GetRamdomBlog().subscribe(function (response) {
            _this.listRandomBlog = response;
        });
    };
    BlogIDComponent.prototype.ngOnInit = function () {
    };
    return BlogIDComponent;
}());
BlogIDComponent = __decorate([
    core_1.Component({
        selector: 'blogidComponent',
        moduleId: module.id,
        templateUrl: './blogid.component.html',
        providers: [blog_service_1.BlogService, getRamdom_service_1.GetRandomBlogService]
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService, router_1.Router,
        getRamdom_service_1.GetRandomBlogService,
        router_1.ActivatedRoute])
], BlogIDComponent);
exports.BlogIDComponent = BlogIDComponent;
//# sourceMappingURL=blogid.component.js.map