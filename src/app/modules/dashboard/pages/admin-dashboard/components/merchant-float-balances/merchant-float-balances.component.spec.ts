import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantFloatBalancesComponent } from './merchant-float-balances.component';

describe('MerchantFloatBalancesComponent', () => {
  let component: MerchantFloatBalancesComponent;
  let fixture: ComponentFixture<MerchantFloatBalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantFloatBalancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantFloatBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
