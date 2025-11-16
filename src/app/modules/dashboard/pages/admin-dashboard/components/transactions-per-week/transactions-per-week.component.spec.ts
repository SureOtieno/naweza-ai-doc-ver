import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsPerWeekComponent } from './transactions-per-week.component';

describe('TransactionsPerWeekComponent', () => {
  let component: TransactionsPerWeekComponent;
  let fixture: ComponentFixture<TransactionsPerWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsPerWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsPerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
