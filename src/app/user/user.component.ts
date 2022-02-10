import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public showUserTable = true;
  public userData: any[] | undefined;
  constructor(public userService: UserService) {
   }

  ngOnInit(): void {
    this.userData = [];
    this.userService.getUser()
    .subscribe((data: any) =>  {
      this.userData = data;
      console.log(data);
    });

  }

  newUser(){
    this.showUserTable= false;
  }

}
