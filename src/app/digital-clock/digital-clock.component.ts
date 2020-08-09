import { ClockCoreService } from './../services/clock-core.service';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  second$: Observable<number>;
  minute$: Observable<number>;
  hour$: Observable<number>;
  constructor(private logic: ClockCoreService) { }

  ngOnInit() {
    this.second$ = this.logic.second$;
    this.minute$ = this.logic.minute$;
    this.hour$ = this.logic.hour$;
  }

  /**
   * onHourChanged
   */
  public onHourChanged(hour: number) {
    this.logic.setHour(hour);
  }

  /**
   * onMinuteChanged
   */
  public onMinuteChanged(minute: number) {
    this.logic.setMinute(minute);
  }

  /**
   * onSecondChanged
   */
  public onSecondChanged(second: number) {
    this.logic.setSecond(second);
  }
}
