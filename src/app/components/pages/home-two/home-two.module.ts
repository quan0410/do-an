import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { FeaturesComponent } from './features/features.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CounterComponent } from './counter/counter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    HomeTwoComponent,
    BannerComponent,
    ServicesComponent,
    AboutTextComponent,
    FeaturesComponent,
    PortfolioComponent,
    CounterComponent,
    TestimonialsComponent,
    WorkProcessComponent,
    PageCtaComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
    CarouselModule
  ]
})
export class HomeTwoModule { }
