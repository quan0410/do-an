import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import teamblock from '../data/team.json';

@Injectable({
  providedIn: 'root'
})
export class TeamHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  public teamblock = teamblock;
  public teamdetails = teamblock;
  constructor(private route: ActivatedRoute) { }
  // Team Details
  public setTeam(id: any) {
    this.teamdetails = teamblock.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setTeam(this.route.snapshot.params.id);
  }
}
