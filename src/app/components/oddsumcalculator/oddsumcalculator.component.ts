import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  oddSum: number | null = null;

  calculateOddSum(): void {
    if (this.number !== null && this.number > 0) {
      this.oddSum = 0;
      for (let i = 1; i <= this.number; i += 2) {
        this.oddSum += i; // Sum odd numbers
      }
    }
  }
}
