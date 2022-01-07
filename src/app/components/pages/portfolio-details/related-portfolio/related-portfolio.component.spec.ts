import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPortfolioComponent } from './related-portfolio.component';

describe('RelatedPortfolioComponent', () => {
  let component: RelatedPortfolioComponent;
  let fixture: ComponentFixture<RelatedPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
