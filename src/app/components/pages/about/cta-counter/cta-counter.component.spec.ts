import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCounterComponent } from './cta-counter.component';

describe('CtaCounterComponent', () => {
  let component: CtaCounterComponent;
  let fixture: ComponentFixture<CtaCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
