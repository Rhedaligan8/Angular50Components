import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstnum: number = 0; // First  number
  secondnum: number = 0; // Second number
  result: number | string = ''; 
  

  // functionality of operation
  addition() {
    this.result = this.firstnum + this.secondnum;
  }

  subtracting() {
    this.result = this.firstnum - this.secondnum;
  }

  multiplication() {
    this.result = this.firstnum * this.secondnum;
  }

  division() {
    if (this.secondnum !== 0) {
      this.result = this.firstnum / this.secondnum;
    } else {
      this.result = 'ERROR! Your input cannot divide by zero';
    }
  }
}





