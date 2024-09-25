import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrength',
  templateUrl: './passwordstrength.component.html',
  styleUrl: './passwordstrength.component.css'
})
export class PasswordstrengthComponent {
  password: string = '';
  strength: string = '';

  checkStrength() {
    const length = this.password.length;
    if (length > 8) {
      this.strength = 'Strong';
    } else if (length >= 5) {
      this.strength = 'Moderate';
    } else {
      this.strength = 'Weak';
    }
  }
}
