import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.css']
})
export class TimerFormComponent implements OnInit {

  isStartClicked: boolean = true;
  min: number;
  sec: number;
  @Output() startClicked = new EventEmitter();

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

  btnStartClicked() {
    this.startClicked.emit(!this.isStartClicked);
    if (isNaN(this.min) || isNaN(this.sec)) {
      this.timerService.min = 0;
      this.timerService.sec = 60;
    } else {
      this.timerService.min = this.min;
      this.timerService.sec = this.sec;
    }
  }
}
