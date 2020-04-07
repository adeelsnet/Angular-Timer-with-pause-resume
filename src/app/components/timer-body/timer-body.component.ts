import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer-body',
  templateUrl: './timer-body.component.html',
  styleUrls: ['./timer-body.component.css']
})
export class TimerBodyComponent implements OnInit {


  isPause: boolean = true;
  startBtn = 'Start';
  min: number;
  sec: number;
  subscribe: any;
  clockTimer: string = '00 : 00';
  totalTime: any;
  warning: string;

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
    this.min = this.timerService.min;
    this.sec = this.timerService.sec;
    this.min = this.min * 60;
    this.sec = this.sec % 60;
    this.totalTime = this.min + this.sec;
    this.timerClock();
  }

  pauseBtnClicked() {
    let newTime = this.totalTime;
    if (this.isPause) {
      this.isPause = !this.isPause;
      this.subscribe.unsubscribe();
    }
  }

  startBtnClicked() {
    if (!this.isPause) {
      this.isPause = !this.isPause;
      this.timerClock();
    }
  }

  timerClock() {
    let minutes, seconds, formatedMinutes, formatedSeconds;
    let nTime = this.totalTime;

    const source = timer(0, 1000);
    this.subscribe = source
      .subscribe(val => {

        if (this.totalTime === -1) {
          console.log(this.totalTime);
          alert('Time is Up!');
          this.subscribe.unsubscribe();
        } else {

          minutes = Math.floor(this.totalTime / 60);
          seconds = this.totalTime % 60;

          formatedMinutes = minutes > 9 ? minutes : '0' + minutes;
          formatedSeconds = seconds > 9 ? seconds : '0' + seconds;
          this.totalTime = nTime - val;

          this.clockTimer = `${formatedMinutes} : ${formatedSeconds}`;
        }
      });
  }
}
