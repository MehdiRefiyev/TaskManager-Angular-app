import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../mockData/TestData';
import { Task } from '../model/Task';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskDAOimpl } from '../mockData/dao/Impl/TaskDAOimpl';
import { CategoryDAOimpl } from '../mockData/dao/Impl/CategoryDAOimpl';
import { Priority } from '../model/Priority';

@Injectable({
  providedIn: 'root',
})
export class DataHandler {
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
  tasksSubject = new BehaviorSubject<Task[]>([]);

  private taskDaoImpl = new TaskDAOimpl();
  private categoryDaoImpl = new CategoryDAOimpl();

  fillTaskByCategory(category: Category) {
    const result = TestData.tasks.filter((task) => task.category === category);
    this.tasksSubject.next(result);
  }

  getAllTaks(): Observable<Task[]> {
    return this.taskDaoImpl.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDaoImpl.getAll();
  }

  searchTasks(
    category?: Category,
    searchText?: string,
    status?: boolean,
    priority?: Priority,
  ): Observable<Task[]> {
    return this.taskDaoImpl.search(category, searchText, status, priority);
  }
}
