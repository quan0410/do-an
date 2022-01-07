import { Component } from '@angular/core';
import { TeamHelperService } from 'src/app/components/helper/team-helper.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent extends TeamHelperService {

}
