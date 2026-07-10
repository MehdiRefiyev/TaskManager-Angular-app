import { Observable, of } from "rxjs";
import { CategoryDAO } from "../Interfaces/CategoryDAO";
import { Category } from "../../../model/Category";
import { TestData } from "../../TestData";

export class CategoryDAOimpl implements CategoryDAO {
    search(title: string): Observable<Category[]> {
        throw new Error("Method not implemented.");
    }
    add(item: Category): Observable<Category> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Category[]> {
        return of(TestData.categories);
    }
    delete(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }
    update(item: Category): Observable<Category> {
        throw new Error("Method not implemented.");
    }
}