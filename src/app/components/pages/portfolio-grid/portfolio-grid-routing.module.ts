import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioGridComponent } from './portfolio-grid.component';

const routes: Routes = [{ path: '', component: PortfolioGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioGridRoutingModule { }
