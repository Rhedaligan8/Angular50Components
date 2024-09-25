import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  item: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.item) {
      this.shoppingList.push(this.item);
      this.item = ''; // Clear the input field
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
