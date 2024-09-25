import { Component } from '@angular/core';

@Component({
  selector: 'app-displayhelloworld',
  templateUrl: './displayhelloworld.component.html',
  styleUrl: './displayhelloworld.component.css'
})
export class DisplayhelloworldComponent {
    hellomessage: string = 'Hello World'; // the hellomessage hold the value which is Hello World
}

