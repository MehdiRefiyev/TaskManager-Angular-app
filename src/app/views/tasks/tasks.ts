import { Component, inject, OnInit } from '@angular/core';
import { DataHandler } from '../../service/data-handler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks implements OnInit {
  
  public tasks : any;

  private readonly dataHandler = inject(DataHandler)

  ngOnInit(){
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }
}
