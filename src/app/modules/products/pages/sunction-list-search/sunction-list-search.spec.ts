import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunctionListSearch } from './sunction-list-search';

describe('SunctionListSearch', () => {
  let component: SunctionListSearch;
  let fixture: ComponentFixture<SunctionListSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunctionListSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunctionListSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
