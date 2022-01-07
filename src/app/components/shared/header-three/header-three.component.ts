import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import data from "../../data/navigation.json";

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css']
})
export class HeaderThreeComponent extends HelperService implements OnInit  {
  public navigation = data;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
