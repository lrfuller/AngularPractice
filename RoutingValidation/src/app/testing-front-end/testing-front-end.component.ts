import { Component, OnInit } from '@angular/core';
import { UserInfo } from './UserInfo';

@Component({
  selector: 'app-testing-front-end',
  templateUrl: './testing-front-end.component.html',
  styleUrls: ['./testing-front-end.component.css']
})
export class TestingFrontEndComponent {

  public user: UserInfo;

  constructor(){
    this.user = new UserInfo();
  }

  getPrint()
  {
    window.print();
  }

  selectFile(event) {
    // if(event.target.files[0].name.length!=0){
    //   console.log("not 0");
    // }else{
    //   console.log("0")
    // }
  
    console.log(event.target.files[0]);
    console.log(event.type + ' event');
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.tagName);
    // console.log(event.target.files[0].name);
    // console.log(event.target.files[0].name.length);
    // console.log(event.target.files.name.length);
  }
  

  getEvent(event) {
    console.log(event.type + " event triggered");
    console.log(event);
  }

  blurEvent(event){
    // event.target.id.value.toUpperCase();
    // console.log(event.target.id.toUpperCase());
    // console.log(event.target.tagName.toUpperCase);

    
  }

  //testing extra blur stuff
  //trying to change the text box to be invalid through DOM manipulation, without using
  //firstName.touched
  invalidTest(event){
    // console.log(event.target.validity.valid);
    // console.log(event);
    if (event.target.validity.valid){
      console.log("valid")
      // document.getElementById("firstNameValidation").setAttribute("invalid", "invalid")
      // console.log(document.getElementById("firstNameInput").attributes);
      // console.log(document.getElementById("firstNameInput").nodeValue);
      console.log(event);
    }else{
      console.log("invalid")
      // console.log(document.getElementById("firstNameValidation"));
      // console.log(document.getElementById("firstNameInput").attributes);
      console.log(event);
    }
  }
}
