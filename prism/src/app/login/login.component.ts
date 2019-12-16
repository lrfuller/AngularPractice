import { Component, OnInit, Injectable } from '@angular/core';
import { userDto } from '../userDto';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
  // users: userDto[] = [];
  user1: userDto;
  admin: userDto;
  tempUser: userDto;
  refreshNum = 0;
  loginB = false;
  
  

  constructor(private router: Router,
    // public jwtHelper: JwtHelperService
    ) { 
    this.user1 = new userDto();
    this.tempUser = new userDto();
    this.initalizeUsers();
    this.refresh();
  

  }

  ngOnInit() {

  }
  

  // public isAuthenticated(): boolean{
  //    const token = sessionStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  initalizeUsers(){
    this.user1.userName="Bob";
    this.user1.password="Joe";
    this.user1.role= "general"; //just as a test, 2 should give access to the homepage link and general requests page link

    // this.admin.userName="admin";
    // this.admin.password="admin";

  }
  

  submitLogin(){
    // this.loginB = this.validateUser();
    if(this.validUser()){
      this.refreshNum = 1;
      // this.tempUser.role = 
      // this.setUser(this.tempUser.userName, this.tempUser.password, this.tempUser.role, this.refreshNum.toString());
      this.setUser(this.tempUser.userName, this.tempUser.password, this.refreshNum.toString());
      this.router.navigate(['home']);
    }
  }


  refresh(){
    if(this.validUser()){
      window.location.reload();
    }else if(Number(sessionStorage.getItem('refreshNum')) == 2){
      sessionStorage.removeItem('refreshNum');
      window.location.reload();
    }
  }

  validUser(): boolean{
    // console.log(this.tempUser);
    //checks if the current username & password match the temp user
    if(this.tempUser.userName==this.user1.userName && this.tempUser.password == this.user1.password){
      return true;
    }else{
      return false;
    }
  }

  // setUser(name: string, pass: string, role: string, refreshNum: string){
    setUser(name: string, pass: string, refreshNum: string){
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('password', pass);
    sessionStorage.setItem('refreshNum', refreshNum);
    // sessionStorage.setItem('role', role);
  }
  

}
