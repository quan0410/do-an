import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceBlockComponent,
    PageCtaComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbModule,
    CarouselModule,
    NgxPaginationModule
  ]
})
export class ServicesModule { }
