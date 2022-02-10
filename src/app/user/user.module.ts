import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user/update-user.component';



@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ]
})
export class UserModule { }
