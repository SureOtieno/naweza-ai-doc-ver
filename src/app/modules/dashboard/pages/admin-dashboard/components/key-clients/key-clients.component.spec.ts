import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyClientsComponent } from './key-clients.component';

describe('KeyClientsComponent', () => {
  let component: KeyClientsComponent;
  let fixture: ComponentFixture<KeyClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
