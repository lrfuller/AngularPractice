
import { Component, OnInit } from '@angular/core';

import { UserInfo } from './userInfo';

@Component({
  selector: 'app-validation2',
  templateUrl: './validation2.component.html',
  styleUrls: ['./validation2.component.css']
})
export class Validation2Component {
  title = 'Validation2';

  arrayUser=[];


  //version1
  public user:UserInfo;
  constructor(){
    this.user=new UserInfo();
    this.setInfo();
  }

  //called on submit
  getInfo(){
    console.log(this.user);
    this.setArrayUser();
    console.log(this.arrayUser[0]);
  }

  setInfo(){
    this.user.firstName="Bob";
    this.user.lastName="Joe";
    this.user.addressLine1="5463 Lilac Lane";
    // this.user.addressLine2="";
    this.user.city="Richmond";
    this.user.state="VA";
    this.user.zipCode=23222;
    this.user.email="testemail234@gmail.com";
    this.user.phoneNumber=8041234567;    
    this.user.dateOfBirth ={ date: { month: 11, day: 1,year: 2019 } }; 
  }

  setArrayUser(){
    this.arrayUser.push('hi');
  }
}
