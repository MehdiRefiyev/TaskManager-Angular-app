import { Observable } from "rxjs";
import { CategoryDAO } from "../Interfaces/CategoryDAO";
import { Category } from "../../../model/Category";

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
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<Category> {
        throw new Error("Method not implemented.");
    }
    update(item: Category): Observable<Category> {
        throw new Error("Method not implemented.");
    }
}