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
var product_service_1 = require("../product/product.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var getRamdomProduct_service_1 = require("../productdetails/getRamdomProduct.service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, getRandomProductService, router, activeRoute) {
        var _this = this;
        this.productService = productService;
        this.getRandomProductService = getRandomProductService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.listDetailProduct = [];
        this.listRandomProduct = [];
        //Code constructor
        router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (val) {
            _this.onChangeUrl();
        });
        this.LoadRandomProduct();
    }
    ProductDetailsComponent.prototype.LoadRandomProduct = function () {
        var _this = this;
        this.getRandomProductService.GetRamdomProduct().subscribe(function (response) {
            _this.listRandomProduct = response;
        });
    };
    ProductDetailsComponent.prototype.onChangeUrl = function () {
        var _this = this;
        this.subscription = this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.productService.GetDetailProduct(this.id).subscribe(function (response) {
            console.log(_this.id);
            _this.listDetailProduct.push(response);
            console.log(_this.listDetailProduct);
        });
    };
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: 'productdetailsComponent',
        templateUrl: '../app/home2/productdetails/productdetails.component.html',
        providers: [product_service_1.ProductService, getRamdomProduct_service_1.GetRandomProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, getRamdomProduct_service_1.GetRandomProductService, router_1.Router,
        router_1.ActivatedRoute])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=productdetails.component.js.map