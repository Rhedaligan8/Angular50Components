import { Component } from '@angular/core';

@Component({
  selector: 'app-simplequiz',
  templateUrl: './simplequiz.component.html',
  styleUrl: './simplequiz.component.css'
})
export class SimplequizComponent {

  question = {
    question: "Ano ang capital ng Philippines?",
    options: ["South China Sea", "Palawan", "Letter P", "Manila"],
    correctAnswer: "Manila"
  };

  selectedAnswer: string = ''; // dito nialalgay yung user's selected answer
  result: string = '';         // maghohold the result message

  // Function to handle answer selection
  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;

    // Check if the selected answer is correct
    if (answer === this.question.correctAnswer) {
      this.result = 'Correct!';
    } else {
      this.result = 'Incorrect!';
    }
  }
}

