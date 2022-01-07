import { Component, OnInit } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial-helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent extends TestimonialHelperService implements OnInit {

  constructor() {
    super();
  }
  settings: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1024: {
        items: 2,
      }
    }
  }

  ngOnInit(): void {
  }

}
