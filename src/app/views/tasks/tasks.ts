import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [
    'color',
    'index',
    'name',
    'category',
    'priority',
    'status',
    'date',
  ];
  public dataSource = new MatTableDataSource<Task>([]);

  @ViewChild(MatPaginator)
  public paginator?: MatPaginator;

  @ViewChild(MatSort)
  public sort?: MatSort;

  @Input() public tasks: Task[] = [];

  ngOnInit(): void {
    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.refreshTable();
  }

  completeTask(taskID: number): void {
    const task = this.tasks.find((task) => task.id === taskID);

    if (!task) {
      return;
    }

    task.completed = !task.completed;

    this.refreshTable();
  }

  getPriorityColor(task: Task): string {
    switch (task.priority?.title) {
      case 'High':
        return '#f44336';

      case 'Medium':
        return '#ff9800';

      case 'Low':
        return '#4caf50';

      default:
        return '#e0e0e0';
    }
  }

  private refreshTable(): void {
    this.dataSource.data = this.tasks;

    this.addTableObjects();
  }

  private addTableObjects(): void {
    if (!this.paginator || !this.sort) {
      return;
    }

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (task: Task, property: string): string | number => {
      switch (property) {
        case 'index':
          return task.id;

        case 'name':
          return task.title;

        case 'category':
          return task.category?.title ?? '';

        case 'priority':
          return task.priority?.title ?? '';

        case 'date':
          return task.date ? new Date(task.date).getTime() : 0;

        case 'status':
          return task.completed ? 1 : 0;

        default:
          return (task as any)[property];
      }
    };
  }
}
