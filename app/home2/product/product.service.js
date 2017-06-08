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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.apiUrl = "http://localhost:8080/product/";
    }
    ProductService.prototype.GetAllCategory = function () {
        return this._http.get(this.apiUrl)
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    ProductService.prototype.GetCategoryById = function (data) {
        return this._http.get(this.apiUrl + data, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.AddNewCategory = function (data) {
        return this._http.post(this.apiUrl, data, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.UpdateCategory = function (id, data) {
        return this._http.put(this.apiUrl + id, data, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.DeleteCategory = function (id) {
        return this._http.delete(this.apiUrl + id, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map