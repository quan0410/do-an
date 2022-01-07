import { Injectable } from '@angular/core';
import author from '../data/team.json';
import testimonials from '../data/testimonials.json';

@Injectable({
  providedIn: 'root'
})
export class TestimonialHelperService {
  public testimonials = testimonials;
  constructor() { }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
}
