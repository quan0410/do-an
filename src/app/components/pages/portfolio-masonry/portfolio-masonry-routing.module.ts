import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioMasonryComponent } from './portfolio-masonry.component';

const routes: Routes = [{ path: '', component: PortfolioMasonryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioMasonryRoutingModule { }
