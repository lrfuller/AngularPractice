// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { LoginComponent } from './login.component';

// @Injectable()
// export class AuthGuardService implements CanActivate {

//     constructor(public auth: LoginComponent, 
//         public router: Router) { 

//     }
    
//     canActivate(): boolean {
//         if (!this.auth.isAuthenticated()) {
//             this.router.navigate(['login']);
//             return false;
//         }
//         return true;
//     }
// }