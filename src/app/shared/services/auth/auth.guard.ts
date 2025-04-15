import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  var token: any = localStorage.getItem('token'); // get fake JWT
  if (token){
    return true;
  }else{
    router.navigate(['/loginPage']);
    alert('No token found redirecting to Login Page.')
    return false
  }
};
