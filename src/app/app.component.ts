import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-timer';
  min: number;
  sec: number;
  isStartClicked: boolean = true;

  isStartBtnClicked(e){
    this.isStartClicked = e.isClicked;
    this.min = e.min;
    this.sec = e.sec;
  }
}
