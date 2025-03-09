import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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

//this is used for signup
  signUpUser = (userData: any) => {
    return this.http.post('http://localhost:8080/signup', userData)
  }

  // login fucntion to loggin
  login = (login: any) => {
    return this.http.post('http://localhost:8080/api/v1/login', login).subscribe((response: any) => {
      localStorage.setItem('token', response.token)
      this._isAuthenticated.next(true);
      this.router.navigate(['/dashboard'])

    });
  }

  //logout user 
  logOut = () => {
    localStorage.removeItem('token');
    this._isAuthenticated.next(false);
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
  
      return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
    };
  }


}


