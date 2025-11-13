import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLayout } from './mail-layout';

describe('MailLayout', () => {
  let component: MailLayout;
  let fixture: ComponentFixture<MailLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
