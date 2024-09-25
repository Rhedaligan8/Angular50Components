import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';

  shuffleWord(): void {
    const letters = this.inputWord.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]]; // Swap
    }
    this.shuffledWord = letters.join('');
  }
}
