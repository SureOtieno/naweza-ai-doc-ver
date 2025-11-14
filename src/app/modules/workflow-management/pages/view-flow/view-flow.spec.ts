import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlow } from './view-flow';

describe('ViewFlow', () => {
  let component: ViewFlow;
  let fixture: ComponentFixture<ViewFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
