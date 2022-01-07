import { Component } from '@angular/core';
import { PortfolioHelperService } from 'src/app/components/helper/portfolio-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends PortfolioHelperService {

}
