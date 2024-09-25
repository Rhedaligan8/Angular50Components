import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  currencyType: string = 'USD';
  formattedAmount: string | null = null;

  formatCurrency(): void {
    if (this.amount !== null) {
      const currencySymbols: { [key: string]: string } = {
        USD: '$',
        PHP: '₱',
        EUR: '€'
      };
      this.formattedAmount = currencySymbols[this.currencyType] + this.amount?.toFixed(2);
    }
  }
}
