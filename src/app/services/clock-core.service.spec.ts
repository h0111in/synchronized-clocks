import { TestBed } from '@angular/core/testing';

import { ClockCoreService } from './clock-core.service';

describe('ClockCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockCoreService = TestBed.get(ClockCoreService);
    expect(service).toBeTruthy();
  });
});
