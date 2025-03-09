import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared-services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('',[Validators.required,Validators.email]),
      password: this.formBuilder.control('',Validators.required)
    });

  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    const user =  this.auth.login(this.loginForm.value);
    user.add();
    console.log(user,"loggedin user")
  }


}
