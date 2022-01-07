import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { PopServicesComponent } from './pop-services/pop-services.component';
import { TeamComponent } from './team/team.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { InfoBlocksComponent } from './info-blocks/info-blocks.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutTextComponent,
    ServicesComponent,
    CounterComponent,
    PopServicesComponent,
    TeamComponent,
    PageCtaComponent,
    TestimonialsComponent,
    BlogsComponent,
    InfoBlocksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
    CarouselModule
  ]
})
export class HomeModule { }
