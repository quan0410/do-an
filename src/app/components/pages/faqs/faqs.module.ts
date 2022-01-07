import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    FaqsComponent,
    ContentComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class FaqsModule { }
