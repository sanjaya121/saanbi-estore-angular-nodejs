import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUpUser=(userData:User)=>{
    return this.http.post('http://localhost:8080/signup',userData)
  }
}
