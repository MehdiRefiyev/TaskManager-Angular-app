import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { DataHandler } from '../../service/data-handler';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  public selectedCategory : Category | undefined;

  @Output() selectCategory = new EventEmitter<Category>();

  @Input() public categories: Category[] | undefined = [];

  public showTaskByCategory(category: Category): void {
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;
    this.selectCategory.emit(category);
  }

}
