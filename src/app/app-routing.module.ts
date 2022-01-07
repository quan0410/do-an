import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/home-three/home-three.module').then(m => m.HomeThreeModule), data: { breadcrumb: "Homepage" } },
  // About Us
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Services
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Services" } },
  { path: 'service-details/:id', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: "Service Details" } },
  // Team
  { path: 'team', loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule), data: { breadcrumb: "Team" } },
  { path: 'team-details/:id', loadChildren: () => import('./components/pages/team-details/team-details.module').then(m => m.TeamDetailsModule), data: { breadcrumb: "Team Details" } },
  // Company
  { path: 'company', loadChildren: () => import('./components/pages/company/company.module').then(m => m.CompanyModule), data: { breadcrumb: "Company History" } },
  // Portfolio
  { path: 'portfolio-grid', loadChildren: () => import('./components/pages/portfolio-grid/portfolio-grid.module').then(m => m.PortfolioGridModule), data: { breadcrumb: "Portfolio Grid" } },
  { path: 'portfolio-masonry', loadChildren: () => import('./components/pages/portfolio-masonry/portfolio-masonry.module').then(m => m.PortfolioMasonryModule), data: { breadcrumb: "Portfolio Masonry" } },
  { path: 'portfolio-details/:id', loadChildren: () => import('./components/pages/portfolio-details/portfolio-details.module').then(m => m.PortfolioDetailsModule), data: { breadcrumb: "Portfolio Details" } },
  // Pages
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  { path: 'testimonials', loadChildren: () => import('./components/pages/testimonials/testimonials.module').then(m => m.TestimonialsModule), data: { breadcrumb: "Testimonials" } },
  { path: 'pricing', loadChildren: () => import('./components/pages/pricing/pricing.module').then(m => m.PricingModule), data: { breadcrumb: "Pricing" } },
  { path: 'career', loadChildren: () => import('./components/pages/career/career.module').then(m => m.CareerModule), data: { breadcrumb: "Career" } },
  { path: 'error-404', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: "Blog Standard" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },
  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
