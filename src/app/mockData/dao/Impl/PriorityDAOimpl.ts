import { Observable } from "rxjs";
import { PriorityDAO } from "../Interfaces/PriorityDAO";
import { Priority } from "../../../model/Priority";

export class PriorityDAOimpl implements PriorityDAO {
    add(item: Priority): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Priority[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
    update(item: Priority): Observable<Priority> {
        throw new Error("Method not implemented.");
    }
}