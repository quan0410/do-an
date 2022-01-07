import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { FooterThreeComponent } from './footer-three/footer-three.component';
import { FooterInnerComponent } from './footer-inner/footer-inner.component';
import { CtaComponent } from './cta/cta.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SearchComponent,
    MobileMenuComponent,
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderInnerComponent,
    FooterComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterInnerComponent,
    CtaComponent,
    PartnersComponent,
    BlogSidebarComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    CarouselModule
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderInnerComponent,
    FooterComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterInnerComponent,
    CtaComponent,
    PartnersComponent,
    BlogSidebarComponent,
    BackToTopComponent
  ]
})
export class SharedModule { }
