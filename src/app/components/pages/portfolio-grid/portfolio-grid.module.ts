import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioGridRoutingModule } from './portfolio-grid-routing.module';
import { PortfolioGridComponent } from './portfolio-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    PortfolioGridComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    PortfolioGridRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PortfolioGridModule { }
