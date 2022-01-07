import { Component, OnInit } from '@angular/core';
import data from "../../../data/career/category.json";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category = data;
  constructor() { }

  ngOnInit(): void {
  }

}
