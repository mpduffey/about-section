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
var AboutSection = (function () {
    function AboutSection() {
    }
    AboutSection = __decorate([
        core_1.Component({
            selector: 'about-section',
            template: "\n\t\t<section id=\"about\" class=\"section-padding white-bg text-center\">\n\t\t\t<div class=\"container mb-60\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-md-6 wow slideInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1s\">\n\t\t\t\t\t\t<img src=\"img/gallery/wi-1.jpg\" style=\"max-width: 457px; width: 100%;\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"spacer-15\"></div>\n\t\t\t\t\t\t<h6 class=\"page-title-alt color mb-10\">AMERICA <span class=\"text-light\">FIRST</span></h6>\n\t\t\t\t\t\t<h2 class=\"page-title mb-25\">Wisconsin Women <span class=\"text-light\">For Trump</span></h2>\n\t\t\t\t\t\t<p class=\"mb-35\">We are women in the state of Wisconsin who support the election of Donald Trump and Governor Mike Pence to be President and Vice President of the United States. We believe in a strong national defense, a growing and robust economy, protection of our freedoms, and an America that is safe, secure, and propserous for our futures, our children and our grandchildren.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutSection);
    return AboutSection;
}());
exports.AboutSection = AboutSection;
//# sourceMappingURL=about-section.js.map