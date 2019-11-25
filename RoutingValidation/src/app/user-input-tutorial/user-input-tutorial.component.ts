import { Component, OnInit } from '@angular/core';
import { UserInfo } from './userInfo';

@Component({
  selector: 'app-user-input-tutorial',
  templateUrl: './user-input-tutorial.component.html',
  styleUrls: ['./user-input-tutorial.component.css']
})
export class UserInputTutorialComponent implements OnInit {

  public user: UserInfo;
  clickMessage='';
  values='';
  values2='';
  values3='';
  values4='';
  values5='';
  userList = ['Bob', 'Joe', 'Bill'];

  constructor() {
    this.user = new UserInfo();
  }

  ngOnInit() {
  }

  onClickMe(){
    // this.clickMessage = 'message lul';
    if (this.clickMessage== ''){
      this.clickMessage = 'message lul';
      // console.log("yes")
    }
    if(this.clickMessage=== 'message lul'){
      this.clickMessage = '';
      // console.log("no")
    }
  }
  onKey(event: any){ //without type info
    //string       current value + pipe
    this.values+=event.target.value + ' | ';
    // console.log(event.target.value);
    // console.log(this.values);
    // console.log(event.target.attributes)
  }

  onKey2(event: KeyboardEvent){ //with type info
    this.values2 += (event.target as HTMLInputElement).value + ' | ';
    // this.values2 += event.target.value + '|';
    // console.log((event.target as HTMLInputElement).attributes);
  }

  onKey3(value: string){
    this.values3 += value + ' | ';
  }

  onEnter(value: string){
    // console.log(value);
    this.values4 = value;
  }

  update(value: string){
    this.values5 = value;
  }

  addUser(newUser: string){
    this.userList.push(newUser);
  }

}
