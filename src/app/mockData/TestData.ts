import { Category } from '../model/Category';
import { Task } from '../model/Task';
import { Priority } from '../model/Priority';

export class TestData {
  static categories: Category[] = [
    new Category(1, 'Work'),
    new Category(2, 'Personal'),
    new Category(3, 'Shopping'),
    new Category(4, 'Health'),
    new Category(5, 'Finance'),
  ];

  static priorities: Priority[] = [
    new Priority(1, 'High', '#ef4444'),
    new Priority(2, 'Medium', '#f59e0b'),
    new Priority(3, 'Low', '#10b981'),
  ];

  // static tasks: Task[] = [];

  static tasks: Task[] = [
    new Task(
      1,
      'Complete project report',
      false,
      this.priorities[0],
      { id: null, title: null },
      new Date(2025, 5, 15),
    ),
    new Task(
      2,
      'Buy groceries',
      false,
      this.priorities[2],
      this.categories[2],
      new Date(2025, 5, 10),
    ),
    new Task(
      3,
      'Doctor appointment',
      true,
      this.priorities[1],
      this.categories[3],
      new Date(2025, 5, 5),
    ),
    new Task(
      4,
      'Review Q2 budget',
      false,
      this.priorities[0],
      this.categories[4],
      new Date(2025, 5, 20),
    ),
    new Task(5, 'Call mom', true, this.priorities[2], this.categories[1], new Date(2025, 5, 8)),
    new Task(
      6,
      'Prepare presentation',
      false,
      this.priorities[0],
      this.categories[0],
      new Date(2025, 5, 12),
    ),
    new Task(
      7,
      'Book flight tickets',
      false,
      this.priorities[1],
      this.categories[1],
      new Date(2025, 5, 25),
    ),
    new Task(
      8,
      'Pay utility bills',
      true,
      this.priorities[0],
      this.categories[4],
      new Date(2025, 5, 1),
    ),
    new Task(
      9,
      'Clean the house',
      false,
      this.priorities[2],
      this.categories[1],
      new Date(2025, 5, 18),
    ),
    new Task(
      10,
      'Submit tax documents',
      false,
      this.priorities[0],
      this.categories[4],
      new Date(2025, 5, 22),
    ),
    new Task(
      11,
      'Read a new book',
      false,
      this.priorities[2],
      this.categories[1],
      new Date(2025, 5, 14),
    ),
    new Task(
      12,
      'Go for a morning run',
      true,
      this.priorities[1],
      this.categories[3],
      new Date(2025, 5, 9),
    ),
    new Task(
      13,
      'Fix website bugs',
      false,
      this.priorities[0],
      this.categories[0],
      new Date(2025, 5, 17),
    ),
    new Task(
      14,
      'Team meeting',
      true,
      this.priorities[1],
      this.categories[0],
      new Date(2025, 5, 11),
    ),
    new Task(
      15,
      'Buy birthday gift',
      false,
      this.priorities[2],
      this.categories[2],
      new Date(2025, 5, 26),
    ),
    new Task(
      16,
      'Renew gym membership',
      false,
      this.priorities[1],
      this.categories[3],
      new Date(2025, 5, 27),
    ),
    new Task(
      17,
      'Organize workspace',
      true,
      this.priorities[2],
      this.categories[0],
      new Date(2025, 5, 13),
    ),
    new Task(
      18,
      'Backup laptop files',
      false,
      this.priorities[1],
      this.categories[0],
      new Date(2025, 5, 19),
    ),
    new Task(
      19,
      'Plan weekend trip',
      false,
      this.priorities[2],
      this.categories[1],
      new Date(2025, 5, 28),
    ),
    new Task(
      20,
      'Update portfolio',
      false,
      this.priorities[0],
      this.categories[0],
      new Date(2025, 5, 30),
    ),
  ];
}
