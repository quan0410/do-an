import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { PortfolioDetailsRoutingModule } from './portfolio-details-routing.module';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { RelatedPortfolioComponent } from './related-portfolio/related-portfolio.component';


@NgModule({
  declarations: [
    PortfolioDetailsComponent,
    ContentComponent,
    RelatedPortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioDetailsRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule
  ]
})
export class PortfolioDetailsModule { }
