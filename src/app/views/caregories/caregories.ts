import { Component, inject, OnInit } from '@angular/core';
import { DataHandler } from '../../service/data-handler';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-caregories',
  imports: [],
  templateUrl: './caregories.html',
  styleUrl: './caregories.scss',
})
export class Caregories implements OnInit {

  private readonly dataHandler = inject(DataHandler)

  public selectedCategory : Category | undefined;

  public categories: Category[] = [];

  ngOnInit(){    
    this.dataHandler.categoriesSubject.subscribe(category => this.categories = category)
  }

  public showTaskByCategory(category : Category){
    this.selectedCategory = category;
    return this.dataHandler.fillTaskByCategory(category);
  }

}
