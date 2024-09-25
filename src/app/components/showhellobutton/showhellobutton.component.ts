import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
  showMessage: boolean = false; //The default value of button is false, 
                                // when it becomes true, the text will display

  displayMessage() {
    this.showMessage = true;
}
}
