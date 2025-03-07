import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
    // [RouterModule.forChild(routes)]
  ],
  // exports: [RouterModule]
})
export class AuthenticationModule { }
