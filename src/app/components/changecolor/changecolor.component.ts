import { Component } from '@angular/core';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrl: './changecolor.component.css'
})
export class ChangecolorComponent {
  colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  currentColor = 'white';

  changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.currentColor = this.colors[randomIndex];
  }
}
