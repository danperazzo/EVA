import { TestBed } from '@angular/core/testing';

import { OcurrenceService } from './ocurrence.service';

describe('OcurrenceService', () => {
  let service: OcurrenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcurrenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
