import { TestBed } from '@angular/core/testing';

import { OccurrenceService } from './occurrence.service';

describe('OcurrenceService', () => {
  let service: OccurrenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccurrenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
