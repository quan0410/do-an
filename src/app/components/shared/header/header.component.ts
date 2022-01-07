import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import data from "../../data/navigation.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService implements OnInit  {
  public navigation = data;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
