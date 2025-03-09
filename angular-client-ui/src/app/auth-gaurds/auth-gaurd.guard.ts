import { inject, ɵgetInjectableDef } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared-services/auth/auth.service';

export const authGaurd: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.isAuthenticated$;
  let xyz;
  isLoggedIn.subscribe(loggedin => {
    xyz = loggedin;
  })
  console.log("isLogged in ", xyz)

  // return authService.isAuthenticated ? true : false;
  if (!xyz) {
    router.navigate(['/login'])
    return false

  }
  return true;



};
