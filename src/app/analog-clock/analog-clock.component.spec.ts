import { ClockCoreService } from './../services/clock-core.service';
import { ClockSettingComponent } from './../clock-setting/clock-setting.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AnalogClockComponent } from './analog-clock.component';

describe('AnalogClockComponent', () => {
  let component: AnalogClockComponent;
  let fixture: ComponentFixture<AnalogClockComponent>;
  let tbClockService: ClockCoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnalogClockComponent,
      ClockSettingComponent
    ],
    providers: [ClockCoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tbClockService = TestBed.get(ClockCoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should calculate degrees`, () => {
    const fixture1 = TestBed.createComponent(AnalogClockComponent);
    const analogClock = fixture1.debugElement.componentInstance as AnalogClockComponent;
    analogClock.fromTime(1, 1, 1);
    expect(analogClock.secondDegree).toEqual(186);
    expect(analogClock.minuteDegree).toEqual(189.1);
    expect(analogClock.hourDegree).toEqual(213.15166666666667);
  });


  it('core should be injected ',
    inject([ClockCoreService], (clockService: ClockCoreService) => {
      expect(clockService).toBe(tbClockService);
    })
  );

  it(`should set hour into a service`, () => {
    const fixture1 = TestBed.createComponent(AnalogClockComponent);
    const digital = fixture1.debugElement.componentInstance as AnalogClockComponent;
    let hour = -1;
    tbClockService.hour$.subscribe(value => hour = value);
    digital.onHourChanged(1);
    expect(hour).toEqual(1);
  });
});
