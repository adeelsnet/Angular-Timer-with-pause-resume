import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  min: number;
  sec: number;
  constructor() { }
}
