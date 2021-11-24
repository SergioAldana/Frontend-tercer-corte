import { TestBed } from '@angular/core/testing';

import { PeleaserviceService } from './peleaservice.service';

describe('PeleaserviceService', () => {
  let service: PeleaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeleaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
