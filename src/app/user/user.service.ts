import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userModel: any;
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<any>('http://localhost:5000/getuser');
  }

  createUser(user: any){
    return this.http.post<any>('http://localhost:5000/createuser', user);
  }

  getUserfromId(id: number){
    return this.http.get<any>(`http://localhost:5000/getuser/${id}`);
  }

  updateUser(user: any){
    return this.http.put<any>('http://localhost:5000/updateuser', user);
  }
}
