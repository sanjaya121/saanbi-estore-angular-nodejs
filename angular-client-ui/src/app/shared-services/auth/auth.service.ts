import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUpUser=(userData:any)=>{
    return this.http.post('http://localhost:8080/signup',userData)
  }

  getUsers=()=>{
    return this.http.get('http://localhost:8080/api/v1/login');
  }
  login=(login:any)=>{
    return this.http.post('http://localhost:8080/api/v1/login',login);
  }

  isLoggedIn=()=>{
    return true;
  }
}
