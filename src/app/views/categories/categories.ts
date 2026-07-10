import { Component, inject, Input } from '@angular/core';
import { DataHandler } from '../../service/data-handler';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {

  private readonly dataHandler = inject(DataHandler)

  public selectedCategory : Category | undefined;

  @Input() public categories: Category[] | undefined = [];

  public showTaskByCategory(category : Category){
    this.selectedCategory = category;
    return this.dataHandler.fillTaskByCategory(category);
  }

}
