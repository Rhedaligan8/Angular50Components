import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './Todomanager.component.html',
  styleUrl: './Todomanager.component.css',
})
export class TodomanagerComponent {
  tasks: string[] = []; // List to store tasks
  newTask: string = ''; // Variable to hold the new task input

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask); // Add task to the list
      this.newTask = ''; // Clear the input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove task by index
  }
}