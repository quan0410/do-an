import { Component } from '@angular/core';
import { TeamHelperService } from 'src/app/components/helper/team-helper.service';

@Component({
  selector: 'app-team-block',
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.css']
})
export class TeamBlockComponent extends TeamHelperService {

}
