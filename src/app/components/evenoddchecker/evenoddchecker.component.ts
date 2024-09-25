import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  inputNumber: number | null = null; // for input number property
  result: string = ''; // hold the result if odd or even

  // Function with name Checking
  Checking() {
    if (this.inputNumber === null) {
      this.result = 'Please enter a number';
    } else if (this.inputNumber % 2 === 0) {
      this.result = 'The number is even';
    } else {
      this.result = 'The number is odd';
    }
  }
}

