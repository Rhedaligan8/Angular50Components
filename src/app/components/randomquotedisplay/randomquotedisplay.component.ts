import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "Kung kaya ng iba, ipagawa mo sa kanila – Rhed Aligan",
    "The mistakes gives you experience to learn how to make mistake again - Jonalyn Nebril",
    "Life isn't about finding yourself, life is about creating  yourself - George Bernard Shaw",
    "If you want live a happy, tie it to a goal, not to people or things - Albert Einstein",
    "A goal without a plan is just a wish - Antoine de Saint Exupery",
    "You have to go able to get up and dust yourself off and always be going forward -Rita Moreno",
    "Better to fight for something than live for nothing - George S. Patton",
  ];
  randomQuote: string | null = null;

  displayRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
