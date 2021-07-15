import { TestBed } from '@angular/core/testing';

import { DatoSensoreService } from './dato-sensore.service';

describe('DatoSensoreService', () => {
  let service: DatoSensoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoSensoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
