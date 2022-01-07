import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    CareerComponent,
    CategoryComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CareerModule { }
