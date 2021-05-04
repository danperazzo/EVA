import { TestBed } from '@angular/core/testing';

import { UserWithoutOcurrence } from './user-without-ocurrence.service';

describe('UserWithoutOcurrenceService', () => {
  let service: UserWithoutOcurrence;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithoutOcurrence);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
