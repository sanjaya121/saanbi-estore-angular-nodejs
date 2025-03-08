import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './auth/login/login.component';
import { authGaurd } from '../auth-gaurds/auth-gaurd.guard';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children:[
      {
        path:'signup',
        component:SignUpComponent
      },
      {
        path:"login",
        component:LoginComponent
      }
    ],
    // canActivate:[authGaurdGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
