import { TestBed } from '@angular/core/testing';

import { ListpropertyService } from './listproperty.service';

describe('ListpropertyService', () => {
  let service: ListpropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
