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
            //console.log(this.listCate);
        });
    };
    ProductComponent.prototype.LoadProduct = function () {
        var _this = this;
        this.productService.GetAllProduct().subscribe(function (response) {
            _this.listProduct = response;
            _this.addItems(0, _this.sum);
            //console.log(this.listProduct);
        });
    };
    ProductComponent.prototype.getProductCategory = function (id) {
        var _this = this;
        console.log(id);
        this.isAll = false;
        if (id != "0") {
            console.log("product category");
            this.productCategory.GetAllProductCategory(id).subscribe(function (response) {
                _this.listProductCate = response;
                console.log("get product category");
                console.log(_this.listProductCate);
                _this.addItems(0, _this.sum);
                console.log(_this.listProductCate);
            });
        }
        else {
            console.log("product");
            this.LoadProduct();
            console.log("get product");
            console.log(this.listProduct);
        }
    };
    ProductComponent.prototype.addItems = function (startIndex, endIndex) {
        var i = this.productIndex;
        for (; i < this.sum; ++i) {
            this.productIndex++;
            if (!this.isAll) {
                this.array.push(this.listProductCate[i]);
                if (this.sum == this.listProductCate.length) {
                    this.isFinish = true;
                }
            }
            else {
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