import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../model/Task';
import { MatSelectModule } from '@angular/material/select';
import { DataHandler } from '../../service/data-handler';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatSelectModule],
  templateUrl: './confrom-dialog.html',
  styleUrl: './confrom-dialog.scss',
})
export class ConfromDialog {

    public task: Task;
    
    private readonly dataHandler = inject(DataHandler);


    constructor(
        public dialogRef: MatDialogRef<ConfromDialog>,
        @Inject(MAT_DIALOG_DATA) public data: { task: Task; title: string }
    ) {
        this.task = { ...data.task };
    }

    public deleteTask(): void {
        this.dataHandler.deleteTask(this.task.id);
        this.dialogRef.close(true)
    }

    public cancel(): void {
        this.dialogRef.close(null);
    }
}