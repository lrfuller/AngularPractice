import { Component, OnInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserInfo } from './userInfo';

@Component({
  selector: 'app-basic-form2',
  templateUrl: './basic-form2.component.html',
  styleUrls: ['./basic-form2.component.css']
})
export class BasicForm2Component implements OnInit {


  ngOnInit() {
  }

  // faCoffee = faCoffee;

  public user:UserInfo;
  constructor(){
    this.user = new UserInfo();
    this.getUserInfo();
  }

  getUserInfo(){
    this.user.username = "Bob";
    this.user.newTickets = 1;
    this.user.pendingTickets = 4;
    this.user.expiringTickets = 3;
    this.user.expiringSoonNumber = 1;
    this.user.expiringSoonDays = 5;
  }

}
