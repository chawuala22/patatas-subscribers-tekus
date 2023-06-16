import { TestBed } from '@angular/core/testing';

import { PatatasSubscribersService } from './patatas-subscribers.service';

describe('PatatasSubscribersService', () => {
  let service: PatatasSubscribersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatatasSubscribersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
