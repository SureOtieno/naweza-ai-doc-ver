import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVsPerformanceLineGraphComponent } from './service-vs-performance-line-graph.component';

describe('ServiceVsPerformanceLineGraphComponent', () => {
  let component: ServiceVsPerformanceLineGraphComponent;
  let fixture: ComponentFixture<ServiceVsPerformanceLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceVsPerformanceLineGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceVsPerformanceLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
