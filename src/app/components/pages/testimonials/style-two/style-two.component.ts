import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial-helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-style-two',
  templateUrl: './style-two.component.html',
  styleUrls: ['./style-two.component.css']
})
export class StyleTwoComponent extends TestimonialHelperService {
  settings: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 10000,
    navText: [
      '<span class="icon-right-arrow left"></span>',
      '<span class="icon-right-arrow"></span>',
    ],
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
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  }
}
