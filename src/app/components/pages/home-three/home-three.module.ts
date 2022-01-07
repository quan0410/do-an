import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { HomeThreeRoutingModule } from './home-three-routing.module';
import { HomeThreeComponent } from './home-three.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { PageBlockComponent } from './page-block/page-block.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { CtaCounterComponent } from './cta-counter/cta-counter.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QuoteComponent } from './quote/quote.component';
import { TeamComponent } from './team/team.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    HomeThreeComponent,
    BannerComponent,
    FeaturesComponent,
    PageBlockComponent,
    WorkProcessComponent,
    CtaCounterComponent,
    PortfolioComponent,
    QuoteComponent,
    TeamComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    HomeThreeRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
    NgxUsefulSwiperModule
  ]
})
export class HomeThreeModule { }
