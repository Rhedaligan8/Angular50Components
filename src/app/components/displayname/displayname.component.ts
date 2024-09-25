import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  user: string = '';  // A property to hold what user's input
  TriggerDisplay: string = '';  // TriggerDisplay hold what names to be display! <3 

  // function to target the user input to display
  showName() {
    this.TriggerDisplay = this.user;
}
}
