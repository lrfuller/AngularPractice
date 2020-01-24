import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '../userInfo'
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent {
// @ViewChild("infoForm",{static: false}) infoForm: NgForm;
title = 'green-form-popup';

public user : UserInfo;
public view1: boolean = true;
// public view2: boolean = false;
// public view3: boolean = false;
// public view4: boolean = false;
// public view5: boolean = false;
// public view6: boolean = false;
// public usernameTS: string = "";
public viewed1: boolean = false;
// public viewed2: boolean = false;
public view1Valid: boolean = false;
public view2Valid: boolean = false;
public view3Valid: boolean = false;
public view4Valid: boolean = false;
public view5Valid: boolean = false;
public view6Valid: boolean = false;
public usernameHTML: any="";

closeResult: string;

constructor(private modalService: NgbModal) {
  this.user = new UserInfo();
  this.createUser();
}

open(content) {
  let ngbModalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: true,
    windowClass: 'newPopup'
  };
  this.modalService.open(content,ngbModalOptions)
}

// open2(content) {
//   let ngbModalOptions: NgbModalOptions = {
//     backdrop: 'static',
//     keyboard: true,
//     windowClass: 'newPopup2'
//   };
//   this.modalService.open(content,ngbModalOptions)
// }

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


viewStart(){
  if (this.viewed1===false){
    this.view1=true; 
    this.viewed1=true  
  }
}

createUser(){
  this.user.username = "John";
}

logInfo(){
  console.log(this.user)
}

change1(change: boolean){
  this.view1Valid = change;
}

change2(change: boolean){
  this.view2Valid = change;
}

change3(changeValue){
  if(changeValue!=""){
    this.view3Valid = true;
    console.log(this.view3Valid)
  }else{
    this.view3Valid = false;
  }
}


}
