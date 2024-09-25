import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  countdown: number = 0;  // Countdown value in seconds
  interval: any;
  countdownMessage: string = ''; // To hold the countdown message

  startTimer(minutes: number): void {
    this.countdown = minutes * 60; // Conversion from minutes to seconds
    this.countdownMessage = `Countdown started for ${minutes} minute(s)`; // Set the countdown message

    clearInterval(this.interval); // Clear any existing timer
    this.interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.interval); // Clear when countdown reaches zero
        this.countdownMessage = ''; // Clear the message when time is up
      }
    }, 1000);
  }
}
