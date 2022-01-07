import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import data from "../../data/navigation.json";

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent extends HelperService implements OnInit  {
  public navigation = data;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
