import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountUpModule } from 'ngx-countup';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { WhyUsComponent } from './why-us/why-us.component';


@NgModule({
  declarations: [
    TeamDetailsComponent,
    ContentComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    SharedModule,
    NgbModule,
    NgCircleProgressModule,
    CountUpModule
  ]
})
export class TeamDetailsModule { }
