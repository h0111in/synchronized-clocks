import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sliding-out-box',
  templateUrl: './sliding-out-box.component.html',
  styleUrls: ['./sliding-out-box.component.scss']
})
export class SlidingOutBoxComponent implements OnInit {

  public a2b: boolean;
  public a: string;
  public b: string;
  @Input() set text(value: string) {
    if (this.a2b) {
      this.b = value;
    } else {
      this.a = value;
    }
    this.a2b = !this.a2b;
  }
  constructor() { }

  ngOnInit() {
  }

}
