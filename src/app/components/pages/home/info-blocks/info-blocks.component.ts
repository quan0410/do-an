import { Component, OnInit } from '@angular/core';
import data from "../../../data/infoblock.json";

@Component({
  selector: 'app-info-blocks',
  templateUrl: './info-blocks.component.html',
  styleUrls: ['./info-blocks.component.css']
})
export class InfoBlocksComponent implements OnInit {
  public infoblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
