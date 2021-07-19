import { TestBed } from '@angular/core/testing';

import { TappeService } from './tappe.service';

describe('TappeService', () => {
  let service: TappeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TappeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
