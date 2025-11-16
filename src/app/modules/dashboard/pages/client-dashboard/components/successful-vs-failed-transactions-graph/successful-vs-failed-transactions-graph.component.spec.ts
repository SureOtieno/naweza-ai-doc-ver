import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulVsFailedTransactionsGraphComponent } from './successful-vs-failed-transactions-graph.component';

describe('SuccessfulVsFailedTransactionsGraphComponent', () => {
  let component: SuccessfulVsFailedTransactionsGraphComponent;
  let fixture: ComponentFixture<SuccessfulVsFailedTransactionsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulVsFailedTransactionsGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulVsFailedTransactionsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
