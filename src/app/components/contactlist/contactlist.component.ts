import { Component } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
  name: string = '';          // User's name
  phoneNumber: string = '';   // User's phone number
  contacts: { name: string, phone: string }[] = []; // Array to hold contacts

  // Function to add a contact
  addContact(): void {
    if (this.name && this.phoneNumber) {
      this.contacts.push({ name: this.name, phone: this.phoneNumber }); // Add contact to the array
      this.name = '';          // Clear name input
      this.phoneNumber = '';   // Clear phone number input
    }
  }
}
