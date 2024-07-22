import { TestBed } from '@angular/core/testing';

import { RentrequestserviceService } from './rentrequestservice.service';

describe('RentrequestserviceService', () => {
  let service: RentrequestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentrequestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
