import { TestBed } from '@angular/core/testing';

import { CabinetComptablesService } from './cabinet-comptables.service';

describe('CabinetComptablesService', () => {
  let service: CabinetComptablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinetComptablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
