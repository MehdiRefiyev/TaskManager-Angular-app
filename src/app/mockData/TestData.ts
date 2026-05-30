import { Category } from "../model/Category";
import { Task } from "../model/Task";
import { Priority } from "../model/Priority";

export class TestData {
    static categories: Category[] = [
        new Category(1, "Work"),
        new Category(2, "Personal"),
        new Category(3, "Shopping"),
        new Category(4, "Health"),
        new Category(5, "Finance")
    ]

    static priorities: Priority[] = [
        new Priority(1, "High", "#ef4444"),
        new Priority(2, "Medium", "#f59e0b"),
        new Priority(3, "Low", "#10b981")
    ]

    static tasks: Task[] = [
        new Task(1, "Complete project report", false, this.priorities[0], this.categories[0], new Date(2025, 5, 15)),
        new Task(2, "Buy groceries", false, this.priorities[2], this.categories[2], new Date(2025, 5, 10)),
        new Task(3, "Doctor appointment", true, this.priorities[1], this.categories[3], new Date(2025, 5, 5)),
        new Task(4, "Review Q2 budget", false, this.priorities[0], this.categories[4], new Date(2025, 5, 20)),
        new Task(5, "Call mom", true, this.priorities[2], this.categories[1], new Date(2025, 5, 8)),
        new Task(6, "Prepare presentation", false, this.priorities[0], this.categories[0], new Date(2025, 5, 12)),
        new Task(7, "Book flight tickets", false, this.priorities[1], this.categories[1], new Date(2025, 5, 25)),
        new Task(8, "Pay utility bills", true, this.priorities[0], this.categories[4], new Date(2025, 5, 1))
    ]
}