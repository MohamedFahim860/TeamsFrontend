import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/common/auth.service';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const token = this.authService.getToken();
//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }
//     return next.handle(req);
//   }
// }
//The above approach is for the class-based interceptors, Angular 18 introduced functional interceptors alongside the traditional class-based inteceptors. Hence when we use 
//withInterceptors() function in the app.config file, Angular expects a functional interceptor, not a class-based one. Hence having a class based interceptor wouldn't work with
//withInterceptors() function in the app.config, and it will give out an error


//Functional interceptor approach

import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  const modifiedReq = token ? req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }) : req;

  return next(modifiedReq);
};

