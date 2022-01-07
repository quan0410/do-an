import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamBlockComponent } from './team-block/team-block.component';
import { WhyUsComponent } from './why-us/why-us.component';


@NgModule({
  declarations: [
    TeamComponent,
    TeamBlockComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class TeamModule { }
