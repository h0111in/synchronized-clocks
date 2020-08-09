import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock-setting',
  templateUrl: './clock-setting.component.html',
  styleUrls: ['./clock-setting.component.scss']
})
export class ClockSettingComponent implements OnInit {

  @Output() hourChanged = new EventEmitter<number>();
  @Output() secondChanged = new EventEmitter<number>();
  @Output() minuteChanged = new EventEmitter<number>();


  @Input() hour: number;
  @Input() minute: number;
  @Input() second: number;
  constructor() { }

  ngOnInit() {
  }

  /**
   * onHourIncrease
   */
  public onHourIncrease() {
    this.hourChanged.emit(this.hour + 1);
  }
  /**
   * onHourDecrease
   */
  public onHourDecrease() {
    this.hourChanged.emit(this.hour - 1);
  }
  /**
   * onMinuteIncrease
   */
  public onMinuteIncrease() {
    this.minuteChanged.emit(this.minute + 1);
  }

  /**
   * onMinuteDecrease
   */
  public onMinuteDecrease() {
    this.minuteChanged.emit(this.minute - 1);
  }

  /**
   * onSecondIncrease
   */
  public onSecondIncrease() {
    this.secondChanged.emit(this.second + 1);
  }

  /**
   * onSecondDecrease
   */
  public onSecondDecrease() {
    this.secondChanged.emit(this.second - 1);
  }

}
