import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactComponent,
    InfoBoxComponent,
    ContactInfoComponent,
    ContactMapComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class ContactModule { }
