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
var FlowerMeaningService = (function () {
    function FlowerMeaningService(_http) {
        this._http = _http;
        this.apiUrl = "http://localhost:8080/meaning/";
    }
    FlowerMeaningService.prototype.GetAllFlMeaning = function () {
        return this._http.get(this.apiUrl)
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    FlowerMeaningService.prototype.GetDetailMeaning = function (id) {
        return this._http.get(this.apiUrl + id)
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    return FlowerMeaningService;
}());
FlowerMeaningService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FlowerMeaningService);
exports.FlowerMeaningService = FlowerMeaningService;
//# sourceMappingURL=flmeaning.service.js.map