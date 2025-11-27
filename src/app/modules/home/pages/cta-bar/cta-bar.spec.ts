import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBar } from './cta-bar';

describe('CtaBar', () => {
  let component: CtaBar;
  let fixture: ComponentFixture<CtaBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
