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
var category_service_1 = require("./category.service");
var product_service_1 = require("./product.service");
var productCategory_service_1 = require("./productCategory.service");
var ProductComponent = (function () {
    function ProductComponent(categoryService, productService, productCategory) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.productCategory = productCategory;
        this.sumProCate = 4;
        this.sum = 4;
        this.throttle = 0;
        this.scrollDistance = 0;
        this.productIndex = 0;
        this.isFinish = false;
        this.array = [];
        this.isAll = false;
        this.LoadData();
        this.LoadProduct();
        this.isAll = true;
    }
    ProductComponent.prototype.LoadData = function () {
        var _this = this;
        this.categoryService.GetAllCategory().subscribe(function (response) {
            _this.listCate = response;
        });
    };
    ProductComponent.prototype.LoadProduct = function () {
        var _this = this;
        this.productService.GetAllProduct().subscribe(function (response) {
            _this.array = [];
            _this.listProduct = response;
            console.log(_this.listProduct);
            _this.productIndex = 0;
            _this.sum = 4;
            _this.isAll = true;
            _this.addItems(0, _this.sum);
        });
    };
    ProductComponent.prototype.getProductCategory = function (id) {
        var _this = this;
        jQuery('#menu_content li').removeClass('active'); // remove active class from all filter links
        jQuery('#' + id + '').addClass('active'); // add active class to clicked link
        this.isAll = false;
        if (id != "0") {
            this.productCategory.GetAllProductCategory(id).subscribe(function (response) {
                _this.listProductCate = response;
                _this.productIndex = 0;
                _this.array = [];
                if (_this.sum > _this.listProductCate.length) {
                    _this.sum = _this.listProductCate.length;
                }
                else {
                    _this.sum = _this.sumProCate;
                }
                _this.addItems(0, _this.sum);
            });
        }
        else {
            this.LoadProduct();
        }
    };
    ProductComponent.prototype.addItems = function (startIndex, endIndex) {
        var i = this.productIndex;
        if (!this.isAll) {
            for (; i < this.sum; i++) {
                this.productIndex++;
                this.array.push(this.listProductCate[i]);
                if (this.sum == this.listProductCate.length) {
                    this.isFinish = true;
                }
            }
        }
        else {
            for (; i < this.sum; i++) {
                this.productIndex++;
                this.array.push(this.listProduct[i]);
                if (this.sum == this.listProduct.length) {
                    this.isFinish = true;
                }
            }
        }
    };
    ProductComponent.prototype.onScrollDown = function () {
        console.log("scrool down!");
        var start = this.sum;
        console.log("start");
        console.log(start);
        this.sum += 4;
        if (this.isAll) {
            if (this.sum >= this.listProduct.length) {
                this.sum = this.listProduct.length;
            }
            this.addItems(start, this.sum);
        }
        else {
            if (this.sum >= this.listProductCate.length) {
                this.sum = this.listProductCate.length;
            }
            this.addItems(start, this.sum);
            console.log("sum");
            console.log(this.sum);
        }
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'productComponent',
        templateUrl: '../app/home2/product/product.component.html',
        providers: [category_service_1.CategoryService, product_service_1.ProductService, productCategory_service_1.ProductCategoryService]
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, product_service_1.ProductService,
        productCategory_service_1.ProductCategoryService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map