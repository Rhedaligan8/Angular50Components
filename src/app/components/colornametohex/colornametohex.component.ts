import { Component } from '@angular/core';

@Component({
  selector: 'app-colornametohex',
  templateUrl: './colornametohex.component.html',
  styleUrl: './colornametohex.component.css'
})
export class ColornametohexComponent {
  colorName: string = ''; // User input for color name
  hexValue: string = '';  // Resulting hexadecimal value

  // A mapping of color names to their hexadecimal values
  colorMap: { [key: string]: string } = {
    red: '#FF0000',
    green: '#008000',
    blue: '#0000FF',
    yellow: '#FFFF00',
    orange: '#FFA500',
    purple: '#800080',
    black: '#000000',
    white: '#FFFFFF',
    pink: '#FFC0CB',
    brown: '#A52A2A',
    // Add more colors as needed
  };

  // Function to convert color name to hex
  convertColorNameToHex(): void {
    const color = this.colorMap[this.colorName.toLowerCase()]; // Get hex value from map
    this.hexValue = color ? color : 'Invalid color name'; // Set hex value or error message
  }
}
