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
var core_1 = require('@angular/core');
var SpsAboutSection = (function () {
    function SpsAboutSection() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SpsAboutSection.prototype, "about", void 0);
    SpsAboutSection = __decorate([
        core_1.Component({
            selector: 'sps-about-section',
            template: "\n\t\t<section id=\"about\" class=\"section-padding white-bg text-center\">\n\t\t\t<div class=\"container mb-60\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<img [src]=\"about.img\" style=\"max-width: 457px; width: 100%;\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"spacer-15\"></div>\n\t\t\t\t\t\t<h6 class=\"page-title-alt color mb-10\">{{about.smallTitle}}</h6>\n\t\t\t\t\t\t<h2 class=\"page-title mb-25\">{{about.boldTitle}}<span class=\"text-light\">{{about.lightTitle}}</span></h2>\n\t\t\t\t\t\t<p class=\"mb-35\">{{about.text}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], SpsAboutSection);
    return SpsAboutSection;
}());
exports.SpsAboutSection = SpsAboutSection;
//# sourceMappingURL=sps-about-section.js.map