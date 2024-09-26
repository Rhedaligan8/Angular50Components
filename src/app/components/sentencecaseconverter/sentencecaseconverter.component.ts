import { Component } from '@angular/core';

@Component({
  selector: 'app-sentencecaseconverter',
  templateUrl: './sentencecaseconverter.component.html',
  styleUrl: './sentencecaseconverter.component.css'
})
export class SentencecaseconverterComponent {
  inputText: string = '';
  convertedText: string = '';

  // Function to convert input to sentence case
  convertToSentenceCase(): void {
    if (this.inputText.length > 0) {
      this.convertedText = this.inputText.charAt(0).toUpperCase() + this.inputText.slice(1).toLowerCase();
    } else {
      this.convertedText = '';
    }
  }
}
