import { Observable } from "rxjs";

export interface CommonDAO<T> {

    add(item : T): Observable<T>;

    get(id: number): Observable<T>;

    getAll(): Observable<T[]>;

    delete(id: number): void;

    update(item : T): void;
}