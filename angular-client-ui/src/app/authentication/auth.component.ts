import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, SignUpComponent, LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
