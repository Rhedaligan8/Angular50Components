import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  user: string = '';
  greets: string = '';   

  // Function to greet the input username
  GreetingsName() {
    this.greets = `Kamusta! ${this.user}! Salamat at nakilala kita`;
  }
}
