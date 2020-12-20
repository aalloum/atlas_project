import { TestBed } from '@angular/core/testing';

import { CabinetClientsService } from './cabinet-clients.service';

describe('CabinetClientsService', () => {
  let service: CabinetClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinetClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
