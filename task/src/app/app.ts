import { Component, signal } from '@angular/core';
import { StudentCard } from './student-card/student-card';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentCard],
  templateUrl: './app.html'
})
export class App {

  studentCount = signal(0);

  studentName = "Eyad";
  studentAge = 23;

  message = "";

  increaseStudents() {
    this.studentCount.update(value => value + 1);
  }

  resetStudents() {
    this.studentCount.set(0);
  }

  receiveMessage(data: string) {
    this.message = data;
  }

}