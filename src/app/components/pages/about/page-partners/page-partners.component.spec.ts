import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartnersComponent } from './page-partners.component';

describe('PagePartnersComponent', () => {
  let component: PagePartnersComponent;
  let fixture: ComponentFixture<PagePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
