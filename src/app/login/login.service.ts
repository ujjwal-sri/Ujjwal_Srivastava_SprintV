
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  validateUser(email: string, password: string){
    return this.http.get<any>(`http://localhost:5000/loginuser/${email}/${password}`);
  }
}

