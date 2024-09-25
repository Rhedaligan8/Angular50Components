import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  Dollar: number = 0; // Holds the amount in Dollar
  Pesos: number | null = null; // Pesos property hold when the conversion is already done.
  Rate: number = 56; // Fix conversion of laban sa piso

  // Function to convery Dollar to Pesos
  Convert() {
    this.Pesos = this.Dollar * this.Rate;
}
}

