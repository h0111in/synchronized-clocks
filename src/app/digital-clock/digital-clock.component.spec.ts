import { ClockCoreService } from './../services/clock-core.service';
import { ClockSettingComponent } from './../clock-setting/clock-setting.component';
import { SlidingOutBoxComponent } from './sliding-out-box/sliding-out-box.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DigitalClockComponent } from './digital-clock.component';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let fixture: ComponentFixture<DigitalClockComponent>;
  let tbClockService: ClockCoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalClockComponent,
        SlidingOutBoxComponent,
        ClockSettingComponent],
      providers: [ClockCoreService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tbClockService = TestBed.get(ClockCoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('core should be injected ',
    inject([ClockCoreService], (clockService: ClockCoreService) => {
      expect(clockService).toBe(tbClockService);
    })
  );

  it(`should set hour into a service`, () => {
    const fixture1 = TestBed.createComponent(DigitalClockComponent);
    const digital = fixture1.debugElement.componentInstance as DigitalClockComponent;
    let hour = -1;
    tbClockService.hour$.subscribe(value => hour = value);
    digital.onHourChanged(1);
    expect(hour).toEqual(1);
  });
});
