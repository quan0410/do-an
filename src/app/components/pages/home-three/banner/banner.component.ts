import { Component, OnInit } from '@angular/core';
import data from "../../../data/banner.json";
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banner = data;
  constructor() { }
  settings: SwiperOptions = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    navigation: {
      nextEl: '#main-slider__swiper-button-next',
      prevEl: '#main-slider__swiper-button-prev'
    },
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  }

  ngOnInit(): void {
  }

}
