import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';

  login() {
    // Placeholder for login logic
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
  }
}
