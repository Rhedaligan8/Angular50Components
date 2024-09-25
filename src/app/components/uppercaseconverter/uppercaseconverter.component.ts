import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputText: string = '';
  uppercasedText: string = '';

  convertToUppercase(): void {
    this.uppercasedText = this.inputText.toUpperCase();
  }
}
