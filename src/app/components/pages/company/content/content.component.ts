import { Component, OnInit } from '@angular/core';
import data from "../../../data/history.json";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public history = data;
  constructor() { }

  ngOnInit(): void {
  }

}
