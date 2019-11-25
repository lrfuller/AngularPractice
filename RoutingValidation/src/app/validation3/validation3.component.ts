import { Component, ViewChild } from '@angular/core';
import { User } from './user';
import { IMyDpOptions } from 'mydatepicker';
// import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation3',
  templateUrl: './validation3.component.html',
  styleUrls: ['./validation3.component.css']
})
export class Validation3Component {
  @ViewChild("infoForm",{static: false}) infoForm: NgForm;
  title = 'Validation3';

  public user = new User;
  public dateOfBirth:any;

  list = [];

  public date:any;

  constructor(){
    this.user = new User();
    this.setUser();
  }

  setUser(){
    this.user.firstName = "Bob";
    this.user.lastName = "Joe";
    this.user.addressLine1 = "8000 Default Drive";
    this.user.city = "Richmond";
    this.user.state = "VA";
    this.user.zip = 23000;
    this.user.email = "test@gmail.com";
    this.user.phoneNumber = 8041234567;
    
    // this.date = {date: {month: 1, day: 2, year: 2010}};
    // this.user.dateOfBirth = this.date;
    //^ works BUT, we need below BECAUSE, we need the object user
    this.dateOfBirth={ date: { month: 11, day: 1,year: 2019 } };
    this.user.dateOfBirth="11/04/2019";
  }

  getUser(){
    console.log(this.user);
    this.list.push(this.user);
    // this.list.length=0;

    //resets the form
    this.user = new User();
    this.infoForm.reset();
  }

  //here we set the user value dateOfBirth with the object value defined locally
  //specifically, we use the value defined as dateofBirth.formatted, which is the 11/01/2019 value we need
  //this.user.dateOfBirth = dateOfBirth.formatted;
  //user.ts value         = any:value
  getDate(value:any){
    this.user.dateOfBirth = value.formatted;
    console.log(value);
  }



  //mydatepicker
  //sets the value dateFormat to be formatted this way
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
  };

  // Initialized to specific date (02.01.2010)
  public model: any = { date: { year: 2010, month: 1, day: 2 } };


}

