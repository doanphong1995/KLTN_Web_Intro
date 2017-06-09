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
var flmeaning_service_1 = require("./flmeaning.service");
var ExperienceComponent = (function () {
    function ExperienceComponent(flowerMeaningService) {
        this.flowerMeaningService = flowerMeaningService;
        this.LoadData();
    }
    ExperienceComponent.prototype.LoadData = function () {
        var _this = this;
        this.flowerMeaningService.GetAllFlMeaning().subscribe(function (response) {
            _this.listFlower = response;
            console.log(_this.listFlower);
        });
    };
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    core_1.Component({
        selector: 'experienceComponent',
        templateUrl: '../app/home2/experience/experience.component.html',
        providers: [flmeaning_service_1.FlowerMeaningService]
    }),
    __metadata("design:paramtypes", [flmeaning_service_1.FlowerMeaningService])
], ExperienceComponent);
exports.ExperienceComponent = ExperienceComponent;
//# sourceMappingURL=experience.component.js.map