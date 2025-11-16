import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDistributionsDonutChartComponent } from './countries-distributions-donut-chart.component';

describe('CountriesDistributionsDonutChartComponent', () => {
  let component: CountriesDistributionsDonutChartComponent;
  let fixture: ComponentFixture<CountriesDistributionsDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDistributionsDonutChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesDistributionsDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
