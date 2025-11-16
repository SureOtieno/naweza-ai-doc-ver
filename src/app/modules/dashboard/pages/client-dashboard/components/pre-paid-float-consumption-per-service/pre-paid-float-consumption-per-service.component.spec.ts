import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePaidFloatConsumptionPerServiceComponent } from './pre-paid-float-consumption-per-service.component';

describe('PrePaidFloatConsumptionPerServiceComponent', () => {
  let component: PrePaidFloatConsumptionPerServiceComponent;
  let fixture: ComponentFixture<PrePaidFloatConsumptionPerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePaidFloatConsumptionPerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePaidFloatConsumptionPerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
