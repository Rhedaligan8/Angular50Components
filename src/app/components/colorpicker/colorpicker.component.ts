import { Component } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrl: './colorpicker.component.css'
})
export class ColorpickerComponent {
  colors: string[] = ['Red #FF0000', 'Green #00FF00', 'Blue #0000FF'];
  selectedColor: string = 'None'; // Default value

  onSelectColor(color: string): void {
    this.selectedColor = color;
  }
}
