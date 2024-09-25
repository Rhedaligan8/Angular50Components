import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0; 
 
  //function to increment the number based 
  //on clicks of user
  incrementclick() {
    this.count += 1;
  }
}
