// import { CanActivateFn } from '@angular/router';
// import { inject } from '@angular/core';
// import { Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   const token = localStorage.getItem('jwt');
  
//   if (token) {
//     return true;
//   } else {
//     router.navigate(['/login']);
//     return false;
//   }
// };

//The above one is the function based approach,
// Class-based guards: Use when the guard logic is complex and you prefer a traditional, structured way of handling Angular services and features.
// Function-based guards: Use when you want concise, straightforward code with minimal boilerplate, and you don't need the overhead of a class structure.

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true; // Allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Deny access
    }
  }
}
