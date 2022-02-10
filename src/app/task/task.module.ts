import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { CreateTaskComponent } from './create-task/create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task/update-task.component';



@NgModule({
  declarations: [
    TaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskModule { }
