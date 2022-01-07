import { Component, OnInit } from '@angular/core';
import data from "../../data/instagram.json";

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.css']
})
export class FooterThreeComponent implements OnInit {
  public instagram = data;
  constructor() { }

  ngOnInit(): void {
  }

}
