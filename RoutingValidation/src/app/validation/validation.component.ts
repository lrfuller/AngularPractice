import { Component, ViewChild, } from '@angular/core';
import { UserInfo } from './superheros';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup, NgForm } from '@angular/forms';




@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})

export class ValidationComponent{

  @ViewChild("infoForm",{static: false}) infoForm: NgForm;
  title = 'Validation';
  arrayUser = [];
  public user: UserInfo;
  public myForm: FormGroup;
  public dateOfBirth:any;
  constructor() {
    this.user = new UserInfo(); //instantiates the user object on start
    this.setData(); //calls set data to autopopulate the fields

  }

  //called on submit
  //used to sending user data & resetting the form
  getUserData() {
    console.log(this.user);
    this.arrayUser.push(this.user);
    this.user = new UserInfo();
    this.infoForm.reset();
  }

  //called in the constructor
  //used for editing a person's information
  setData() {
    this.user.firstName="Bob";
    this.user.lastName="Joe";
    this.user.address1="5463 Lilac Lane";
    this.user.address2="";
    this.user.city="Richmond";
    this.user.state="VA";
    this.user.zipcode=23222;
    this.user.email="test@gmail.com";
    this.user.phoneNumber=8041234567;    
    //this.user.dateOfBirth = { date: { month: 11, day: 1,year: 2019 } };
    //used after updating mydatepicker:
    this.dateOfBirth={ date: { month: 11, day: 1,year: 2019 } };
    this.user.dateOfBirth="11/04/2019";

  }

  //here we set the user value dateOfBirth with the object value defined locally
  //specifically, we use the value defined as dateofBirth.formatted, which is the 11/01/2019 value we need
  //this.user.dateOfBirth = dateOfBirth.formatted;
  //user.ts value         = any:value
  getDate(value:any)
  {
    this.user.dateOfBirth=value.formatted;
  }


  //mydatepicker
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };


}
