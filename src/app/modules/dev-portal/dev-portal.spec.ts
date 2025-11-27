import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPortal } from './dev-portal';

describe('DevPortal', () => {
  let component: DevPortal;
  let fixture: ComponentFixture<DevPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
