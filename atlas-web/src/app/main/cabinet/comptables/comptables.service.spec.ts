import { TestBed } from '@angular/core/testing';

import { ComptablesService } from './comptables.service';

describe('ComptablesService', () => {
  let service: ComptablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
