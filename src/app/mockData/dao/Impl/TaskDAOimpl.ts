import { Observable, of } from 'rxjs';
import { Task } from '../../../model/Task';
import { TaskDAO } from '../Interfaces/TaskDao';
import { Category } from '../../../model/Category';
import { Priority } from '../../../model/Priority';
import { TestData } from '../../TestData';

export class TaskDAOimpl implements TaskDAO {
  getCompletedCountInCategory(category: Category): Observable<number> {
    throw new Error('Method not implemented.');
  }
  getUncompletedCountInCategory(category: Category): Observable<number> {
    throw new Error('Method not implemented.');
  }
  getTotalCountInCategory(category: Category): Observable<number> {
    throw new Error('Method not implemented.');
  }
  getTotalCount(): Observable<number> {
    throw new Error('Method not implemented.');
  }
  add(item: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }
  get(id: number): Observable<Task> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  delete(id: number) {
    let result = TestData.tasks.filter(t => t.id !== id);
    return TestData.tasks = result
  }

  update(task: Task): void {
    const index = TestData.tasks.findIndex(t => t.id === task.id);
    
    if (index !== -1) {
      TestData.tasks[index] = task;
    }
  }

  search(
    category?: Category,
    searchText?: string,
    status?: boolean,
    priority?: Priority,
  ): Observable<Task[]> {
    const result = TestData.tasks.filter((task) => {
      const categoryMatch = !category || task.category?.id === category.id;

      const textMatch = !searchText || task.title.toLowerCase().includes(searchText.toLowerCase());

      const statusMatch = status === undefined || task.completed === status;

      const priorityMatch = !priority || task.priority?.id === priority.id;

      return categoryMatch && textMatch && statusMatch && priorityMatch;
    });

    return of(result);
  }
}
