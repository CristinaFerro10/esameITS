import { TestBed } from '@angular/core/testing';

import { MezzoTrasportoService } from './mezzo-trasporto.service';

describe('MezzoTrasportoService', () => {
  let service: MezzoTrasportoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MezzoTrasportoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
