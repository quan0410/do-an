import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopServicesComponent } from './pop-services.component';

describe('PopServicesComponent', () => {
  let component: PopServicesComponent;
  let fixture: ComponentFixture<PopServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
