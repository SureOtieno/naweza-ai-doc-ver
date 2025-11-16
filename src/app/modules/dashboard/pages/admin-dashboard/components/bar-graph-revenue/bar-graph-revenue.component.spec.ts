import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphRevenueComponent } from './bar-graph-revenue.component';

describe('BarGraphRevenueComponent', () => {
  let component: BarGraphRevenueComponent;
  let fixture: ComponentFixture<BarGraphRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarGraphRevenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarGraphRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
