import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockSettingComponent } from './clock-setting.component';

describe('ClockSettingComponent', () => {
  let component: ClockSettingComponent;
  let fixture: ComponentFixture<ClockSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should Set Hour`, () => {
    const fixture1 = TestBed.createComponent(ClockSettingComponent);
    const clockSetting = fixture1.debugElement.componentInstance as ClockSettingComponent;
    let hour = -1;
    clockSetting.hour = 0;
    clockSetting.hourChanged.subscribe(value => hour = value);
    clockSetting.onHourIncrease();
    expect(hour).toEqual(1);
    clockSetting.onHourDecrease();
    expect(hour).toEqual(-1);
  });
  it(`should set Minute`, () => {
    const fixture1 = TestBed.createComponent(ClockSettingComponent);
    const clockSetting = fixture1.debugElement.componentInstance as ClockSettingComponent;
    let minute = -1;
    clockSetting.minute = 0;
    clockSetting.minuteChanged.subscribe(value => minute = value);
    clockSetting.onMinuteIncrease();
    expect(minute).toEqual(1);
    clockSetting.onMinuteDecrease();
    expect(minute).toEqual(-1);
  });
  it(`should set Second`, () => {
    const fixture1 = TestBed.createComponent(ClockSettingComponent);
    const clockSetting = fixture1.debugElement.componentInstance as ClockSettingComponent;
    let second = -1;
    clockSetting.second = 0;
    clockSetting.secondChanged.subscribe(value => second = value);
    clockSetting.onSecondIncrease();
    expect(second).toEqual(1);
    clockSetting.onSecondDecrease();
    expect(second).toEqual(-1);
  });
});
