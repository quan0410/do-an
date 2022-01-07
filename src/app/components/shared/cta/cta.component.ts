import { Component, OnInit } from '@angular/core';
import data from "../../data/ctatext.json";

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
  public ctatext = data;
  constructor() { }

  ngOnInit(): void {
  }

}
