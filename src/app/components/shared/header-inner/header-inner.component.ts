import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import data from "../../data/navigation.json";

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html',
  styleUrls: ['./header-inner.component.css']
})
export class HeaderInnerComponent extends HelperService implements OnInit  {
  public navigation = data;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
