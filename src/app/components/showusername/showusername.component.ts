import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
  username: string = ''; 
  displayedUsername: string | null = null; 

 
  showUsername() {
    this.displayedUsername = this.username;
  }
}
