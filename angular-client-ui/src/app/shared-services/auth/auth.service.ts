import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient, private router: Router) { 

    const token = localStorage.getItem('token');
    this._isAuthenticated.next(!!token);
  }




  getToken = () => {
    return localStorage.getItem('token');
  }
  signUpUser = (userData: any) => {
    return this.http.post('http://localhost:8080/signup', userData)
  }

  login = (login: any) => {
    return this.http.post('http://localhost:8080/api/v1/login', login).subscribe((response: any) => {
      localStorage.setItem('token', response.token)
      this._isAuthenticated.next(true);
      this.router.navigate(['/dashboard'])

    });
  }

}
