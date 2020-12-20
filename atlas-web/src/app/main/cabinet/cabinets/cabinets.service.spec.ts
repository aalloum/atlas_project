import { TestBed } from '@angular/core/testing';

import { CabinetsService } from './cabinets.service';

describe('CabinetsService', () => {
  let service: CabinetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
