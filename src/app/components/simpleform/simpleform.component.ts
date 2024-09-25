import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {

  formData = {
    name: '',
    email: ''
  }; 

  Submit: any = null; 

  // function
  Submitname() {
    this.Submit = { ...this.formData }; // Copy of input of user into the display data
  }
}

