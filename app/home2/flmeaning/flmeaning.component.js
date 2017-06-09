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
var flmeaning_service_1 = require("../experience/flmeaning.service");
var getRandomMeaning_service_1 = require("./getRandomMeaning.service");
require("rxjs/add/operator/filter");
var FlMeaningComponent = (function () {
    function FlMeaningComponent(flowerMeaningService, router, getRandomMeaningService, activeRoute) {
        var _this = this;
        this.flowerMeaningService = flowerMeaningService;
        this.router = router;
        this.getRandomMeaningService = getRandomMeaningService;
        this.activeRoute = activeRoute;
        this.listInfoMeaning = [];
        //Code constructor
        router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (val) {
            _this.onChangeUrl();
        });
        this.LoadRandomMeaning();
    }
    FlMeaningComponent.prototype.onChangeUrl = function () {
        var _this = this;
        this.subscription = this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.flowerMeaningService.GetDetailMeaning(this.id).subscribe(function (response) {
            console.log(_this.id);
            _this.listInfoMeaning.push(response);
            console.log(_this.listInfoMeaning);
        });
    };
    FlMeaningComponent.prototype.LoadRandomMeaning = function () {
        var _this = this;
        this.getRandomMeaningService.GetRamdomMeaning().subscribe(function (response) {
            _this.listRandomMeaning = response;
        });
    };
    FlMeaningComponent.prototype.ngOnInit = function () {
    };
    return FlMeaningComponent;
}());
FlMeaningComponent = __decorate([
    core_1.Component({
        selector: 'flmeaningComponent',
        templateUrl: '../app/home2/flmeaning/flmeaning.component.html',
        providers: [flmeaning_service_1.FlowerMeaningService, getRandomMeaning_service_1.GetRandomMeaningService]
    }),
    __metadata("design:paramtypes", [flmeaning_service_1.FlowerMeaningService, router_1.Router,
        getRandomMeaning_service_1.GetRandomMeaningService,
        router_1.ActivatedRoute])
], FlMeaningComponent);
exports.FlMeaningComponent = FlMeaningComponent;
//# sourceMappingURL=flmeaning.component.js.map