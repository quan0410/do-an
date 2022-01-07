import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { SharedModule } from '../../shared/shared.module';
import { PlansComponent } from './plans/plans.component';
import { WhyUsComponent } from './why-us/why-us.component';


@NgModule({
  declarations: [
    PricingComponent,
    PlansComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PricingModule { }
