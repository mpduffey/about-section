import {Component, Input} from '@angular/core';

@Component({
	selector:				'sps-about-section',
	template:				`
		<section id="about" class="section-padding white-bg text-center">
			<div class="container mb-60">
				<div class="row text-center">
					<div class="col-md-6">
						<img [src]="about.img" style="max-width: 457px; width: 100%;"/>
					</div>
					<div class="col-md-6">
						<div class="spacer-15"></div>
						<h6 class="page-title-alt color mb-10">{{about.smallTitle}}</h6>
						<h2 class="page-title mb-25">{{about.boldTitle}}<span class="text-light">{{about.lightTitle}}</span></h2>
						<p class="mb-35">{{about.text}}</p>
					</div>
				</div>
			</div>
		</section>
	`
})

export class SpsAboutSection {
	@Input() about;
}