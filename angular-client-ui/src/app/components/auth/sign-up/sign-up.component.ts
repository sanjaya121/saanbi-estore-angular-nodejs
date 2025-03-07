import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UUID } from "uuidjs";
import { User } from '../../../model/user';
import { AuthService } from '../../../services/auth/auth.service';


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
  userData: User = {
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

    })
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
      console.log("isValid",this.singUpForm.valid);
      this.enableButton =this.singUpForm.valid;
    })
   
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.singUpForm);
    this.id=UUID.genV6().hexString
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

  singUp=(userData:User)=>{
    
    console.log(userData,"userData");
    this.authService.signUpUser(userData).subscribe((response:any)=>{
      console.log(response)
        this.signUpMessage=response.message;
    });
  }

  getUsers=()=>{
    this.authService.getUsers().subscribe((response:any)=>{
      console.log("Users",response.data)
       
    });
  }

  login=()=>{
    this.authService.login("test").subscribe(login=>{
      console.log("Login")
    })
  }
}
