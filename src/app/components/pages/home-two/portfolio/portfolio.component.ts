import { Component } from '@angular/core';
import { PortfolioHelperService } from 'src/app/components/helper/portfolio-helper.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends PortfolioHelperService {

}
