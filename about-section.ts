import {Component} from '@angular/core';

@Component({
	selector:				'about-section',
	template:				`
		<section id="about" class="section-padding white-bg text-center">
			<div class="container mb-60">
				<div class="row text-center">
					<div class="col-md-6 wow slideInUp" data-wow-delay="0.2s" data-wow-duration="1s">
						<img src="img/1.jpg" style="max-width: 457px; width: 100%;"/>
					</div>
					<div class="col-md-6 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
						<div class="spacer-15"></div>
						<h6 class="page-title-alt color mb-10">AMERICA <span class="text-light">FIRST</span></h6>
						<h2 class="page-title mb-25">Wisconsin Women <span class="text-light">For Trump</span></h2>
						<p class="mb-35">We are women in the state of Wisconsin who support the election of Donald Trump and Governor Mike Pence to be President and Vice President of the United States. We believe in a strong nationa defense, a growing and robust economy, protection of our freedoms, and an America that is safe, secure, and propserous for our futures, our children and our grandchildren.</p>
					</div>
				</div>
			</div>
		</section>
	`
})

export class AboutSection {
	
}