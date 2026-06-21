import { Component, inject, OnInit } from '@angular/core';
import { DataHandler } from '../../service/data-handler';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, MatTableModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks implements OnInit {
  
  public tasks : any;

  private readonly dataHandler = inject(DataHandler)

  ngOnInit(){
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  completeTask(taskID : boolean) : void {
    const completedTaskIndex = this.tasks.findIndex((task : any) => task.id === taskID);

    this.tasks[completedTaskIndex].completed = !this.tasks[completedTaskIndex].completed;
  
    // this.dataHandler.tasksSubject.next(this.tasks)
  }

  displayedColumns: string[] = ['color', 'index', 'name', 'category', 'priority', 'status', 'date'];

  getPriorityColor(task: any): string {
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
}
