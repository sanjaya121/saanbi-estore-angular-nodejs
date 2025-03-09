import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UUID } from "uuidjs";
import { AuthService } from '../../../shared-services/auth/auth.service';
import { confirmPasswordValidator } from './confirm-password.validator';



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
  // formData = {};
  userData = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };
  id:any="";
  enableButton:boolean=false;


  constructor(private authService:AuthService) {

    this.singUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)

    }, { validators:confirmPasswordValidator })
    this.singUpForm.valueChanges.subscribe(values => {
      // this.formData = values;
      // console.log("form Data", this.singUpForm);
      this.userData={
        id:this.id,
        email:values.email,
        firstName:values.firstName,
        lastName:values.lastName,
        password:values.password
      }
   
      this.enableButton =this.singUpForm.valid;
      // console.log("password do not match",confirmPasswordValidator())
    })
   
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.singUpForm);
    this.id=UUID.genV6().hexString
    console.log("uuiddddd",this.id);
  
    
   
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

  signUpMessage="";

  singUp=(userData:any)=>{
    
    console.log(userData,"userData");
    this.authService.signUpUser(userData).subscribe((response:any)=>{
      console.log(response)
        this.signUpMessage=response.message;
    });
  }

}
