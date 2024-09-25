import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean | null = null;

  validateUsername(): void {
    this.isValid = this.username.length >= 5 && /^[a-zA-Z0-9]+$/.test(this.username);
  }
}
