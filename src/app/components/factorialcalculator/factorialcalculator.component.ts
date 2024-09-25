import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {

  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.factorialRecursive(this.number);
    } else {
      this.factorial = null; // Reset if invalid input
    }
  }

  private factorialRecursive(n: number): number {
    return n <= 1 ? 1 : n * this.factorialRecursive(n - 1);
  }
}
