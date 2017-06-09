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
var event_service_1 = require("./event.service");
var HomeComponent = (function () {
    function HomeComponent(eventService) {
        this.eventService = eventService;
        this.LoadData();
    }
    HomeComponent.prototype.LoadData = function () {
        var _this = this;
        this.eventService.GetAllEvent().subscribe(function (response) {
            _this.listEvent = response;
            console.log(_this.listEvent);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            document.getElementById("pmmCarousel_next").click();
        }, 0);
    };
    HomeComponent.prototype.goFB = function () {
        window.location.href = 'https://www.facebook.com/doanphong19951';
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'homeComponent',
        moduleId: module.id,
        templateUrl: './home.component.html',
        providers: [event_service_1.EventService]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map