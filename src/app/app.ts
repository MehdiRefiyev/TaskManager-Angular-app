import { Component, inject, signal } from '@angular/core';
import { Tasks } from './views/tasks/tasks';
import { DataHandler } from './service/data-handler';
import { Task } from './model/Task';
import { Category } from './model/Category';
import { Categories } from './views/categories/categories';

@Component({
  selector: 'app-root',
  imports: [Categories, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('To-Do-List');

  private readonly dataHandler = inject(DataHandler);

  public tasks: Task[] = [];
  public categories: Category[] = [];

  constructor() {
    this.dataHandler.getAllTaks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.dataHandler.getAllCategories().subscribe((category) => (this.categories = category));
  }

  public onSelectCategory(category: Category): void {
    this.dataHandler.searchTasks(category).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  public onClikTask(task: Task): void {
    console.log('Task clicked:', task);
  }
}
