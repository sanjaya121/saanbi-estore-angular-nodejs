import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    LoginComponent,
    SignUpComponent
    // [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class AuthenticationModule { }
