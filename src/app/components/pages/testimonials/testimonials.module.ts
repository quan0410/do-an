import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { SharedModule } from '../../shared/shared.module';
import { StyleOneComponent } from './style-one/style-one.component';
import { StyleTwoComponent } from './style-two/style-two.component';


@NgModule({
  declarations: [
    TestimonialsComponent,
    StyleOneComponent,
    StyleTwoComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule,
    NgbModule,
    CarouselModule
  ]
})
export class TestimonialsModule { }
