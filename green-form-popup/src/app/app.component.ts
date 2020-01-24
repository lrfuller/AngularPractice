import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '../userInfo'
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   @ViewChild("infoForm",{static: false}) infoForm: NgForm;
//   title = 'green-form-popup';

//   public user : UserInfo;
//   closeResult: string;


//   public view1: boolean = true;
//   public view2: boolean = false;
//   public view3: boolean = false;
//   public view4: boolean = false;
//   public view5: boolean = false;
//   public view6: boolean = false;
//   // public usernameTS: string = "";
//   public viewed1: boolean = false;
//   public viewed2: boolean = false;
//   public view1Valid: boolean = false;
//   public view2Valid: boolean = false;
//   public view3Valid: boolean = false;
//   public view4Valid: boolean = false;
//   public view5Valid: boolean = false;
//   public view6Valid: boolean = false;
//   public canView2: boolean = false;
//   public usernameHTML: any="";
//   public confirmBool: boolean = false;
//   public validTest: boolean = false;

//   // private formTest: FormControl = new FormControl(this.validTest);


//   public len = 0;

//   constructor(private modalService: NgbModal) {
//     this.user = new UserInfo();
//     this.createUser();
//     this.testingUser();
//   }

//   ngDoCheck(){
//     // if(this.infoForm.valid){
//     //   console.log("valid")
//     // }

//     // console.log(this.infoForm)

//   }

//   open(content) {
//     let ngbModalOptions: NgbModalOptions = {
//       backdrop: 'static',
//       keyboard: true,
//       windowClass: 'newPopup'
//     };
//     this.modalService.open(content,ngbModalOptions)
//   }

//   // open2(content) {
//   //   let ngbModalOptions: NgbModalOptions = {
//   //     backdrop: 'static',
//   //     keyboard: true,
//   //     windowClass: 'newPopup2'
//   //   };
//   //   this.modalService.open(content,ngbModalOptions)
//   // }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }

//   public myDatePickerOptions: IMyDpOptions = {
//     dateFormat: 'mm/dd/yyyy',
// };

// // Initialized to specific date (09.10.2018).
// public model: any = { date: { year: 2018, month: 10, day: 9 } };
// // public model: any = { };


//   viewStart(){
//     if (this.viewed1===false){
//       this.view1=true; 
//       this.viewed1=true  
//     }
//   }

//   createUser(){
//     this.user.username = "John";
//   }

//   testingUser(){
//     this.user.resident = "Yes";
//     this.user.category = "Procurement Records";
//     this.user.firstName = "John";
//     this.user.lastName = "Baker";
//     this.user.phoneNumber = "(804) 000-0000";
//     this.user.email = "example@gmail.com";
//     this.user.confirmEmail = "example@gmail.com";
//     // this.user.confirmEmail = "example2@gmail.com";
//     this.user.address1 = "2125 Chesnut St";
//     this.user.city = "Richmond";
//     this.user.state = "VA";
//     this.user.zipCode = 23116;
//   }

//   logInfo(){
//     console.log(this.user)
//   }

//   change1(change: boolean){
//     this.view1Valid = change;
//   }

//   change2(change: boolean){
//     this.view2Valid = change;
//   }

//   change3(changeValue){
//     if(changeValue!=""){
//       this.view3Valid = true;
//       console.log(this.view3Valid)
//     }else{
//       this.view3Valid = false;
//     }
//   }



//   clicked1(){
//     if(this.canView2){
//       this.view1=true; 
//       this.viewed1=true; 
//       this.view2=false;
//       this.view3=false; 
//       this.view4=false; 
//       this.view5=false; 
//       this.view6=false
//     }
    
//   }

//   check1(b1, b2){
//     console.log(b1 + ' ' + b2)
//   }

//   // check2(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14){
//   //   if ((b1+ b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11 + b12 + b13 + b14) == 14){
//   //     this.validTest = true;
//   //   }
//   //   console.log(this.validTest)
//   // }

//   key(test){
//     console.log(test)
//   }

}
