import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private router: Router) { }

   isAuthenticated = new BehaviorSubject<boolean>(false);

  signUpUser = (userData: any) => {
    return this.http.post('http://localhost:8080/signup', userData)
  }

  getUsers = () => {
    return this.http.get('http://localhost:8080/api/v1/login');
  }
  login = (login: any) => {
    return this.http.post('http://localhost:8080/api/v1/login', login).subscribe((response: any) => {
      localStorage.setItem('token', response.token)
      this.isAuthenticated.next(true);

    });
  }

  isLoggedIn=()=>{
    this.isAuthenticated.asObservable();
  }

}
