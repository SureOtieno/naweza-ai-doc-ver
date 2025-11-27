import { TestBed } from '@angular/core/testing';

import { DataExplorationService } from './data-exploration.service';

describe('DataExplorationService', () => {
  let service: DataExplorationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataExplorationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
