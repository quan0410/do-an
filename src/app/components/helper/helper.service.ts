import { Injectable, HostListener, AfterViewInit, OnInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements AfterViewInit, OnInit {
  windowScrolled: boolean | undefined;
  constructor() { }
  // Sticky Nav
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 200) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  // navigation
  navmethod: boolean = false;
  toggleNav() {
    this.navmethod = !this.navmethod;
    let element = <HTMLElement>document.getElementById('body');
    element.classList.toggle('locked');
  }
  //Mobile 
  open: boolean = false;
  trigger(item: { open: boolean }) {
    item.open = !item.open;
  }
  // Search
  searchMethod: boolean = false;
  toggleSearch() {
    this.searchMethod = !this.searchMethod;
    let element = <HTMLElement>document.getElementById('body');
    element.classList.toggle('locked');
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.img-popup') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }
}
