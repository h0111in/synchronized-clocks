import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


export interface IClockCore {
  second$: Observable<number>;
  minute$: Observable<number>;
  hour$: Observable<number>;

  reset();
  setSecond(second: number);
  setMinute(minute: number);
  setHour(hour: number);
}

@Injectable({
  providedIn: 'root'
})
export class ClockCoreService implements IClockCore {


  private secondSubject = new BehaviorSubject(0);
  private minuteSubject = new BehaviorSubject(0);
  private hourSubject = new BehaviorSubject(0);
  constructor() {
    this.reset();

    setInterval(() => {
      const newSecond = (this.secondSubject.value + 1) % 60;
      const newMinute = newSecond === 0 ? ((this.minuteSubject.value + 1) % 60) : this.minuteSubject.value;
      const newHour = newMinute === 0 ? ((this.hourSubject.value + 1) % 24) : this.hourSubject.value;
      this.setSecond(newSecond);
      this.setHour(newMinute);
      this.setMinute(newHour);
    }, 1000); // set it every one seconds}
  }

  public get second$(): Observable<number> {
    return this.secondSubject.asObservable();
  }
  public get minute$(): Observable<number> {
    return this.minuteSubject.asObservable();
  }
  public get hour$(): Observable<number> {
    return this.hourSubject.asObservable();
  }

  reset() {
    const currentTime = new Date();
    this.setSecond(currentTime.getSeconds());
    this.setHour(currentTime.getHours());
    this.setMinute(currentTime.getMinutes());

  }
  setSecond(second: number) {
    this.secondSubject.next(second);
  }
  setMinute(minute: number) {
    this.minuteSubject.next(minute);
  }
  setHour(hour: number) {
    this.hourSubject.next(hour);
  }
}
