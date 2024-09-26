import { Component } from '@angular/core';

@Component({
  selector: 'app-jokegenerator',
  templateUrl: './jokegenerator.component.html',
  styleUrl: './jokegenerator.component.css'
})
export class JokegeneratorComponent {
  jokes: string[] = [
    "Anong tawag ng 0 kay 8? Wow ang sexy mo namann",
    "Bakit hindi pwede magtanim ng gulay sa Mars? Kasi wala silang 'space'!",
    "Bakit masakit magmahal ngayon? Kasi pag nasaktan ka, hindi ka na makakakain!"
  ];

  currentJoke: string = ''; // Store the current joke

  // Function to generate a random joke
  generateJoke(): void {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    this.currentJoke = this.jokes[randomIndex];
  }
}
