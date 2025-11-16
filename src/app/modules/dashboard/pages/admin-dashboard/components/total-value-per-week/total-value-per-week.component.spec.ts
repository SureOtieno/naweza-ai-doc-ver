import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValuePerWeekComponent } from './total-value-per-week.component';

describe('TotalValuePerWeekComponent', () => {
  let component: TotalValuePerWeekComponent;
  let fixture: ComponentFixture<TotalValuePerWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalValuePerWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalValuePerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
