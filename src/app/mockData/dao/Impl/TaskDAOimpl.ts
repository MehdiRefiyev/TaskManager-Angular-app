import { Observable, of } from "rxjs";
import { Task } from "../../../model/Task";
import { TaskDAO } from "../Interfaces/TaskDao";
import { Category } from "../../../model/Category";
import { Priority } from "../../../model/Priority";
import { TestData } from "../../TestData";

export class TaskDAOimpl implements TaskDAO {
    search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
        throw new Error("Method not implemented.");
    }
    getCompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getUncompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCount(): Observable<number> {
        throw new Error("Method not implemented.");
    }
    add(item: Task): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Task[]> {
        return of(TestData.tasks)
    }
    delete(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    update(item: Task): Observable<Task> {
        throw new Error("Method not implemented.");
    }
}