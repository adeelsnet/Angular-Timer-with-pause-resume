import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.css']
})
export class TimerFormComponent implements OnInit {

  isStartClicked: boolean = true;

  @Output() startClicked = new EventEmitter();

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

  btnStartClicked(data: NgForm) {
    if (data.value.minutes === null && data.value.seconds === null) {
      return;
    } else if (data.value.minutes <= 0 && data.value.seconds <= 0) {
      return;
    } else if (data.value.minutes === null || data.value.seconds === null) {
      return;
    } else {
      this.startClicked.emit(!this.isStartClicked);
      this.timerService.min = data.value.minutes;
      this.timerService.sec = data.value.seconds;
    }
  }
}
