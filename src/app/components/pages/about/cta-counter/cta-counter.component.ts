import { Component, OnInit } from '@angular/core';
import data from "../../../data/counter.json";

@Component({
  selector: 'app-cta-counter',
  templateUrl: './cta-counter.component.html',
  styleUrls: ['./cta-counter.component.css']
})
export class CtaCounterComponent implements OnInit {
  public counter = data;
  constructor() { }

  ngOnInit(): void {
  }

}
