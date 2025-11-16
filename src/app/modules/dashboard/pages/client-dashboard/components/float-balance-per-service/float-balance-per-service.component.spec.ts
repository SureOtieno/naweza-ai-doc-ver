import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatBalancePerServiceComponent } from './float-balance-per-service.component';

describe('FloatBalancePerServiceComponent', () => {
  let component: FloatBalancePerServiceComponent;
  let fixture: ComponentFixture<FloatBalancePerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatBalancePerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatBalancePerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
