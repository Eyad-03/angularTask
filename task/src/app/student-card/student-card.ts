import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  templateUrl: './student-card.html'
})
export class StudentCard {

  @Input() name: string = "";
  @Input() age: number = 0;

  @Output() studentEvent = new EventEmitter<string>();

  sendMessage() {
    this.studentEvent.emit("Student " + this.name + " is selected!");
  }

}