import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { ClockSettingComponent } from './clock-setting/clock-setting.component';
import { SlidingOutBoxComponent } from './digital-clock/sliding-out-box/sliding-out-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    ClockSettingComponent,
    SlidingOutBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
