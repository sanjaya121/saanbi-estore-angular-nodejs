import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor() {

    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    })
  }

  loginForm: FormGroup;

  get userName(){
   return this.loginForm.controls['userName']
  }

  get password(){
    return this.loginForm.controls['password']
   }

  ngOnInit(): void {

  }

}
