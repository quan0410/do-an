import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial-helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-style-one',
  templateUrl: './style-one.component.html',
  styleUrls: ['./style-one.component.css']
})
export class StyleOneComponent extends TestimonialHelperService {
  settings: OwlOptions = {
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 10000,
    navText: [
      '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
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
        items: 2,
      }
    }
  }
}
