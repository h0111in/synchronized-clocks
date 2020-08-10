import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingOutBoxComponent } from './sliding-out-box.component';

describe('SlidingOutBoxComponent', () => {
  let component: SlidingOutBoxComponent;
  let fixture: ComponentFixture<SlidingOutBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingOutBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingOutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
