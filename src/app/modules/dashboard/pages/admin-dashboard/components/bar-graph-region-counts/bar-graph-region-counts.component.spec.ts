import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphRegionCountsComponent } from './bar-graph-region-counts.component';

describe('BarGraphRegionCountsComponent', () => {
  let component: BarGraphRegionCountsComponent;
  let fixture: ComponentFixture<BarGraphRegionCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarGraphRegionCountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarGraphRegionCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
