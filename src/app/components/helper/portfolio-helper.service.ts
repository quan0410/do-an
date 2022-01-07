import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import portfolioblock from '../data/portfolio/portfolio.json';
import portfoliocategory from '../data/category.json';
import client from '../data/team.json';
import { Category } from './filter/category';
import { Item } from './filter/item';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  public activeItem: number;
  public portfolioblock = portfolioblock; 
  public portfoliodetails = portfolioblock;
  constructor(private route: ActivatedRoute) {
    this.activeItem = 1;
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = portfoliocategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Client
  public getClient(items: string | any[]) {
    var elems = client.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Portfolio Details
  public setPortfolio(id: any) {
    this.portfoliodetails = portfolioblock.filter((item: { id: any; }) => { return item.id == id });
  }
  // Related Portfolio
  public getPortfolioByCategory(items: string | any[]) {
    var elems = portfolioblock.filter((portfolio: { id: string; category: any[]; }) => { return parseInt(portfolio.id) !== parseInt(this.route.snapshot.params.id) && portfolio.category.some(r => items.includes(r)) });
    return elems;
  }
  ngAfterContentInit(): void {
    this.setPortfolio(this.route.snapshot.params.id);
  }
  // Filter
  items: Item[] = portfolioblock;
  categories: Category[] = portfoliocategory;
  filteredItems: Item[] | [] = [...this.items];

  filterItemsByCategory(category: Category, id: number,) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(parseInt(category.id));
    });
    this.activeItem = id
  }
  reset(id: number) {
    this.filteredItems = [...this.items];
    this.activeItem = id
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fab fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fab fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconClass: "fab fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  } 
  openSocialPopup(social: any){
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
