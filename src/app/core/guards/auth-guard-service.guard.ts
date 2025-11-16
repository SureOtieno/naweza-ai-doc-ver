import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';

export const authGuardServiceGuard: CanActivateFn = (route, state) => {
  let isAuthenticated = inject(AuthService).isAuthenticated();
  let router = inject(Router);
  //Check if the user is authenticated
  if (isAuthenticated) {
    return true;
  } else {
    // router.navigateByUrl('auth').then(()=>{
    //   console.log('Navigated to sign-in');
    // });
    router
      .navigate(['auth'], { queryParams: { returnUrl: state.url } })
      .then()
      .finally();
    return false;
  }
};
