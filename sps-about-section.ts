import {Component, Input} from '@angular/core';

@Component({
	selector:				'sps-about-section',
	template:				`
		<section id="about" class="section-padding white-bg text-center">
			<div class="container mb-60">
				<div class="row text-center">
					<div class="col-md-6 wow slideInUp" data-wow-delay="0.2s" data-wow-duration="1s">
						<img [src]="aboutImgSrc" style="max-width: 457px; width: 100%;"/>
					</div>
					<div class="col-md-6">
						<div class="spacer-15"></div>
						<h6 class="page-title-alt color mb-10">AMERICA <span class="text-light">FIRST</span></h6>
						<h2 class="page-title mb-25">Wisconsin Women <span class="text-light">For Trump</span></h2>
						<p class="mb-35">{{aboutText}}</p>
					</div>
				</div>
			</div>
		</section>
	`
})

export class SpsAboutSection {
	@Input("about-title") aboutTitle;
	@Input("about-text") aboutText;
	@Input("about-img-src") aboutImgSrc;
}