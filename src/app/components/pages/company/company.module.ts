import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    CompanyComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CompanyModule { }
