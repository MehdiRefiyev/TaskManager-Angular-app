import { Component, signal } from '@angular/core';
import { Caregories } from "./views/caregories/caregories";
import { Tasks } from "./views/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Caregories, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('To-Do-List');
}
