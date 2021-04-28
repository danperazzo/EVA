import { TestBed } from '@angular/core/testing';

import { UserWithoutOcurrenceService } from './user-without-ocurrence.service';

describe('UserWithoutOcurrenceService', () => {
  let service: UserWithoutOcurrenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithoutOcurrenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
