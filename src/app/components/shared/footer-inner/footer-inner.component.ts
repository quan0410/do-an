import { Component, OnInit } from '@angular/core';
import data from "../../data/instagram.json";

@Component({
  selector: 'app-footer-inner',
  templateUrl: './footer-inner.component.html',
  styleUrls: ['./footer-inner.component.css']
})
export class FooterInnerComponent implements OnInit {
  public instagram = data;
  constructor() { }

  ngOnInit(): void {
  }

}
