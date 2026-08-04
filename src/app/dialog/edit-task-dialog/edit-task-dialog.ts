import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogContent, MatDialogActions],
  templateUrl: './edit-task-dialog.html',
  styleUrl: './edit-task-dialog.scss',
})
export class EditTaskDialog {
  public task: Task;
  public title: string;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task; title: string }
  ) {
    this.task = { ...data.task };
    this.title = data.title;
  }

  public save(): void {
    this.dialogRef.close(this.task);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}