import { SlidingOutBoxComponent } from './digital-clock/sliding-out-box/sliding-out-box.component';
import { ClockCoreService } from './services/clock-core.service';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { ClockSettingComponent } from './clock-setting/clock-setting.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AnalogClockComponent,
        DigitalClockComponent,
        ClockSettingComponent,
        SlidingOutBoxComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'synchronized-clocks'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('synchronized-clocks');
  });

});
