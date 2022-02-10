import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup | any;
  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    public router: Router) { }


  ngOnDestroy(): void { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  OnSubmit(){
    console.log(this.loginForm.value);
    let uname = this.loginForm.value.username;
    let newUsername = uname.replace('@','%40');
    console.log(newUsername);
    this.loginService.validateUser(newUsername, this.loginForm.value.password)
    .subscribe(
      (response: any) => {
      console.log(response);
    },
    error => {
      if(error.error.text === 'User validated'){
        this.router.navigate(['user']);
      }
      else {

      }
    });
  } 
}