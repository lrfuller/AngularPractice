import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';

// import { AuthGuardService as AuthGuard } from './login/auth-guard.service';


const routes: Routes = [
  //login removed from routing automatically since the requirements for it
  // were purely to get it styled correctly, not functional. Could change later
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'general', component: GeneralComponent},
  { path: 'home', component: HomeComponent},

  // { path: 'general', component: GeneralComponent ,
  // canActivate:[AuthGuard] },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

export const routingComponent = [LoginComponent, GeneralComponent, HomeComponent]