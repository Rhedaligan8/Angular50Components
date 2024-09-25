import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  targetNumber: number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  guess: number | null = null; // User's guess
  message: string = ''; // Feedback message

  checkGuess() {
    if (this.guess === null) return;

    if (this.guess < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.guess > this.targetNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = 'Congratulations! You guessed it right!';
      this.resetGame();
    }
  }

  resetGame() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = null;
  }

}
