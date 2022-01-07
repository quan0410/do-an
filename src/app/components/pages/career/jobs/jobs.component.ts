import { Component, OnInit } from '@angular/core';
import data from "../../../data/career/jobs.json";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public jobs = data;
  constructor() { }

  ngOnInit(): void {
  }

}
