import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyServicesComponent } from './key-services.component';

describe('KeyServicesComponent', () => {
  let component: KeyServicesComponent;
  let fixture: ComponentFixture<KeyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
