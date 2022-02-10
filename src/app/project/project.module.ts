import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { CreateProjectComponent } from './create-project/create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project/update-project.component';



@NgModule({
  declarations: [
    ProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
