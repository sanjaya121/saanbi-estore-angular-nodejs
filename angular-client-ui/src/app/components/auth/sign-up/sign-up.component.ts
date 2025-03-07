import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  /**
   *
   */

  singUpForm: FormGroup // form initialization.
  formData = {};
  constructor() {

    this.singUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)

    })
    this.singUpForm.valueChanges.subscribe(values => {
      this.formData = values;
      console.log("form Data", this.singUpForm);
    })
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.singUpForm);
  }
  get email() {
    return this.singUpForm.controls['email'];
  }
  get firstName() {
    return this.singUpForm.controls['firstName'];
  }
  get lastName() {
    return this.singUpForm.controls['lastName'];
  }
  get password() {
    return this.singUpForm.controls['password'];
  }
  get confirmPassword() {
    return this.singUpForm.controls['confirmPassword'];
  }
}
