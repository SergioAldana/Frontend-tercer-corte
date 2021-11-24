import { TestBed } from '@angular/core/testing';

import { PastelserviceService } from './pastelservice.service';

describe('PastelserviceService', () => {
  let service: PastelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
