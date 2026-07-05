import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../mockData/TestData';
import { Task } from '../model/Task';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskDAOimpl } from '../mockData/dao/Impl/TaskDAOimpl';

@Injectable({
  providedIn: 'root',
})
export class DataHandler {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories)

  private taskDaoImpl = new TaskDAOimpl();

  // fillTasks() {
  //   this.tasksSubject.next(TestData.tasks)
  // }

  fillTaskByCategory(category : Category) {
    const result = TestData.tasks.filter(task =>  task.category === category);
    this.tasksSubject.next(result)
  }

  getAllTaks(): Observable<Task[]> {
    return this.taskDaoImpl.getAll();
  }
}
