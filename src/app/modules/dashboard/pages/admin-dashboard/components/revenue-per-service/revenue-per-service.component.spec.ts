import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuePerServiceComponent } from './revenue-per-service.component';

describe('RevenuePerServiceComponent', () => {
  let component: RevenuePerServiceComponent;
  let fixture: ComponentFixture<RevenuePerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuePerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuePerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
