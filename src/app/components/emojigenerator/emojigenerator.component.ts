import { Component } from '@angular/core';

@Component({
  selector: 'app-emojigenerator',
  templateUrl: './emojigenerator.component.html',
  styleUrl: './emojigenerator.component.css'
})
export class EmojigeneratorComponent {
  emojis = ['😀', '😂', '😍', '🤔', '😎', '😢', '😡'];
  currentEmoji = '';

  generateEmoji() {
    const randomIndex = Math.floor(Math.random() * this.emojis.length);
    this.currentEmoji = this.emojis[randomIndex];
  }
}
