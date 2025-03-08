import { inject, ɵgetInjectableDef } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGaurdGuard: CanActivateFn = (route, state) => {


  const authService=inject(AuthService);
  const router =inject(Router);

  if(authService.isLoggedIn()){
    return false;
  }
  else{
    router.navigate(['/auth']);
    return true;
  }
  return true;
};
