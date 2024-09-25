import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputText: string = ''; // Use to hold users- input
  textLength: number | null = null; // hold for determining length of words or sentence

  // Function
  calculatetheLength() {
    this.textLength = this.inputText.length;
  }
}

