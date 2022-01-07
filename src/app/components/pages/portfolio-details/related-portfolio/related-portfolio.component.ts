import { Component } from '@angular/core';
import { PortfolioHelperService } from 'src/app/components/helper/portfolio-helper.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-related-portfolio',
  templateUrl: './related-portfolio.component.html',
  styleUrls: ['./related-portfolio.component.css']
})
export class RelatedPortfolioComponent extends PortfolioHelperService {
  settings: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 30 },
      375: { slidesPerView: 1, spaceBetween: 30 },
      575: { slidesPerView: 1, spaceBetween: 30 },
      768: { slidesPerView: 1, spaceBetween: 30 },
      991: { slidesPerView: 2, spaceBetween: 30 },
      1199: { slidesPerView: 2, spaceBetween: 30 },
      1200: { slidesPerView: 3, spaceBetween: 30 }
    }
  }
}
