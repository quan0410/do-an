import { Component, OnInit } from '@angular/core';
import data from "../../../data/partners.json";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-page-partners',
  templateUrl: './page-partners.component.html',
  styleUrls: ['./page-partners.component.css']
})
export class PagePartnersComponent implements OnInit {

  public partners = data;
  constructor() { }
  settings: OwlOptions = {
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: false,
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
        items: 2,
      },
      800: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    }
  }
  ngOnInit(): void {
  }

}
