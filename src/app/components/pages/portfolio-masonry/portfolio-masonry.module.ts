import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { PortfolioMasonryRoutingModule } from './portfolio-masonry-routing.module';
import { PortfolioMasonryComponent } from './portfolio-masonry.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    PortfolioMasonryComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    PortfolioMasonryRoutingModule,
    SharedModule,
    NgbModule,
    NgMasonryGridModule
  ]
})
export class PortfolioMasonryModule { }
