import { Component } from '@angular/core';
import { BlogHelperService } from '../../helper/blog-helper.service';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.css']
})
export class FooterTwoComponent extends BlogHelperService {
}
