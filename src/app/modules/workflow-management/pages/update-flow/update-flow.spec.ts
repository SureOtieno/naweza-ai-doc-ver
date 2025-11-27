import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlow } from './update-flow';

describe('UpdateFlow', () => {
  let component: UpdateFlow;
  let fixture: ComponentFixture<UpdateFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
