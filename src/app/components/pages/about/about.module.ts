import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { CtaCounterComponent } from './cta-counter/cta-counter.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { PagePartnersComponent } from './page-partners/page-partners.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTextComponent,
    ServicesComponent,
    TeamComponent,
    CtaCounterComponent,
    WhyUsComponent,
    PagePartnersComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
    CarouselModule
  ]
})
export class AboutModule { }
