import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import serviceblock from '../data/service/service.json';

@Injectable({
  providedIn: 'root'
})
export class ServiceHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  public serviceblock = serviceblock; 
  public servicedetails = serviceblock;
  constructor(private route: ActivatedRoute) { }
  // Service Details
  public setService(id: any) {
    this.servicedetails = serviceblock.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setService(this.route.snapshot.params.id);
  }
}
