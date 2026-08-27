import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../model/Task';
import { MatSelectModule } from '@angular/material/select';
import { TestData } from '../../mockData/TestData';
import { Category } from '../../model/Category';
import { Priority } from '../../model/Priority';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogContent, MatDialogActions, MatSelectModule, ReactiveFormsModule],
  templateUrl: './edit-task-dialog.html',
  styleUrl: './edit-task-dialog.scss',
})
export class EditTaskDialog {
  public task: Task;
  public title: string;
  public category = new FormControl();
  public priority = new FormControl();
  public categoryList: Category[] = TestData.categories;
  public priorityList: Priority[] = TestData.priorities;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task; title: string }
  ) {
    this.task = { ...data.task };
    this.title = data.title;
  }

  public save(): void {
    this.task.category = this.category.value;
    this.task.priority = this.priority.value;
    this.dialogRef.close(this.task);
  }

  public cancel(): void {
    this.dialogRef.close(null);
  }
}