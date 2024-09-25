import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {

  birthYear: number | null = null; // Property that will hold the input birth year
  age: number | null = null;       // age property use to hold age after calculate

  // Function to calculate the date now minus for your birthdate
  calculate() {
    if (this.birthYear) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.birthYear;
    }
  }
}


