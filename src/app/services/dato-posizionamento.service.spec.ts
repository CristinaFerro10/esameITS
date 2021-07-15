import { TestBed } from '@angular/core/testing';

import { DatoPosizionamentoService } from './dato-posizionamento.service';

describe('DatoPosizionamentoService', () => {
  let service: DatoPosizionamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoPosizionamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
