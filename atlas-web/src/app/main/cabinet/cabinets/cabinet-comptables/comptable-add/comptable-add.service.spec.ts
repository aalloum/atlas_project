import { TestBed } from '@angular/core/testing';

import { ComptableAddService } from './comptable-add.service';

describe('ComptableAddService', () => {
  let service: ComptableAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptableAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
