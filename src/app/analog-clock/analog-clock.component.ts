import { ClockCoreService } from './../services/clock-core.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  public secondDegree: number;
  public minuteDegree: number;
  public hourDegree: number;
  second$: Observable<number>;
  minute$: Observable<number>;
  hour$: Observable<number>;
  constructor(private logic: ClockCoreService) { }

  ngOnInit() {
    combineLatest( this.logic.second$,
    this.logic.minute$,
    this.logic.hour$).subscribe(([second, minute, hour]) => this.fromTime(second, minute, hour));
    this.second$ = this.logic.second$;
    this.minute$ = this.logic.minute$;
    this.hour$ = this.logic.hour$;
  }

  fromTime(second: any, minute: any, hour: any) {
    this.secondDegree = second * 6;
    this.minuteDegree =  (minute * 6) + (this.secondDegree / 60);
    this.hourDegree =  (minute * 6) + (this.minuteDegree / 60);
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
