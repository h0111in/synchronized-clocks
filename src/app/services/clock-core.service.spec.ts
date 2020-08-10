import { TestBed } from '@angular/core/testing';

import { ClockCoreService } from './clock-core.service';

describe('ClockCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockCoreService = TestBed.get(ClockCoreService);
    expect(service).toBeTruthy();
  });

  it('should set the hour', () => {
    const service: ClockCoreService = TestBed.get(ClockCoreService);
    let hour = -1;
    service.hour$.subscribe(value => hour = value);
    service.setHour(10);
    expect(hour).toEqual(10);
  });
  it('should set the minute', () => {
    const service: ClockCoreService = TestBed.get(ClockCoreService);
    let minute = -1;
    service.minute$.subscribe(value => minute = value);
    service.setMinute(10);
    expect(minute).toEqual(10);
  });
  it('should set the second', () => {
    const service: ClockCoreService = TestBed.get(ClockCoreService);
    let second = -1;
    service.second$.subscribe(value => second = value);
    service.setSecond(10);
    expect(second).toEqual(10);
  });
});
