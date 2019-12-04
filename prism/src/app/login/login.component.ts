import { Component, OnInit } from '@angular/core';
import { userDto } from '../userDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user1: userDto;
  tempUser: userDto;
  

  constructor() { 
    this.user1 = new userDto();
    this.tempUser = new userDto();
    this.initalizeUser1();

  }

  ngOnInit() {
  }

  initalizeUser1(){
    this.user1.userName="Bob";
    this.user1.password="Joe";
  }

  
  submitLogin(){
    console.log(this.tempUser);
    if(this.tempUser.userName==this.user1.userName && this.tempUser.password == this.user1.password){
      // console.log("match");
      this.setUser(this.tempUser.userName, this.tempUser.password);
      // this.tempUser()
    }else{
      console.log("no match");
    }
  }
  setUser(name: string, pass: string){
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('password', pass);
  }
  

}
