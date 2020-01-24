import { Component, ViewChild, DoCheck, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '../../userInfo'
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
declare let tinymce: any;

@Component({
  selector: 'app-external-v2',
  templateUrl: './external-v2.component.html',
  styleUrls: ['./external-v2.component.css']
})
export class ExternalV2Component {
  @ViewChild("infoForm",{static: false}) infoForm: NgForm;
  title = 'green-form-popup';

  public user : UserInfo;
  closeResult: string;


  public dateText: boolean = false;
  public descText: boolean = false;
  public view1: boolean = true;
  public view2: boolean = false;
  public view3: boolean = false;
  public view4: boolean = false;
  public view5: boolean = false;
  public view6: boolean = false;
  // public usernameTS: string = "";
  public viewed1: boolean = false;
  public viewed2: boolean = false;


  public view1Valid: boolean = false;
  public view2Valid: boolean = false;
  public view3Valid: boolean = false;
  public canView2: boolean = false;
  public usernameHTML: any="";
  public confirmBool: boolean = false;
  public validTest: boolean = false;


  //booleans for show and hide each step:
  public sourceOthers: boolean = true;
  // public validPre3: boolean = false;
  public valid1: boolean = false;
  public valid2: boolean = false;
  public valid3: boolean = false;
  public valid4: boolean = false;
  public valid5: boolean = false;
  public valid6: boolean = false;
  public valid7: boolean = false;
  public valid8: boolean = false;
  public valid9: boolean = false;
  public valid10: boolean = false;
  public valid11: boolean = false;
  public valid12: boolean = false;
  public valid13: boolean = false;
  public valid14: boolean = false;
  public valid15: boolean = false;
  public valid16: boolean = false;
  public valid17: boolean = false;
  public valid18: boolean = false;

  // private formTest: FormControl = new FormControl(this.validTest);

  public today = new Date();
  private datePlaceholder: string = "01/02/2019     (day/month/year)";
  public len = 0;
  public result: string = '';

  config: any = {
    height: 250,
    width: '100%',
    theme: 'modern',
    plugins: 'textcolor wordcount colorpicker textpattern',
    toolbar: 'bold italic strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat',
    branding: false,
    menubar: false,
    statusbar: false
  };

  constructor(private modalService: NgbModal, private ref: ChangeDetectorRef) {
    this.user = new UserInfo();
    this.createUser();
    // this.testingUser();

    this.config.init_instance_callback = (editor: any) => {
      editor.on('keyup', () => {
        this.getData(editor);
      });
    };
  }

  ngDoCheck(){
    // if(this.infoForm.valid){
    //   console.log("valid")
    // }

    // console.log(this.infoForm)

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

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
        //https://stackoverflow.com/questions/50647349/mydatepicker-disablesince-option-in-case-of-date-of-birth-validation?rq=1
        disableSince: { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1 }
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
// public model: any = { };


getData(editor: any) {
  this.len = 0;
  if (tinymce.activeEditor.getContent({ format: 'text' }).length > 5000) {
    let len: any = tinymce.activeEditor.getContent({ format: 'text' }).length;
    let re = len - 5000;
    let data: any = tinymce.activeEditor.getContent({ format: 'text' });
    let dat = data.substring(0, 5000);
    tinymce.activeEditor.setContent('<div id="idTextPanel" class="jqDnR" style="margin: 0px; padding: 0px; position: relative; color: #666666; font-family: Verdana, Geneva, Helvetica, sans-serif; font-size: 11px;"><p style="margin: 0px 0px 10px; padding: 0px; line-height: normal; font-family: Verdana, Geneva, sans-serif; font-size: 10px;">' + dat + '</p></div>');
    this.ref.detectChanges();
  }
  else if (tinymce.activeEditor.getContent() === "") {
    this.len = 0;
    this.ref.detectChanges();
  }
  else {
    this.len = tinymce.activeEditor.getContent({ format: 'text' }).length;
    this.ref.detectChanges();
  }
};

  viewStart(){
    if (this.viewed1===false){
      this.view1=true; 
      this.viewed1=true  
    }
  }

  createUser(){
    this.user.username = "John";
  }

  testingUser(){
    this.user.resident = "Yes";
    this.user.category = "Procurement Records";
    this.user.firstName = "John";
    this.user.lastName = "Baker";
    this.user.phoneNumber = 8040000000;
    this.user.email = "example@gmail.com";
    this.user.confirmEmail = "example@gmail.com";
    // this.user.confirmEmail = "example2@gmail.com";
    this.user.address1 = "2125 Chesnut St";
    this.user.city = "Richmond";
    this.user.state = "VA";
    this.user.zipCode = 23116;
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



  clicked1(){
    if(this.canView2){
      this.view1=true; 
      this.viewed1=true; 
      this.view2=false;
      this.view3=false; 
      this.view4=false; 
      this.view5=false; 
      this.view6=false
    }
    
  }

  check1(b1, b2){
    console.log(b1 + ' ' + b2)
  }

  // check2(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14){
  //   if ((b1+ b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11 + b12 + b13 + b14) == 14){
  //     this.validTest = true;
  //   }
  //   console.log(this.validTest)
  // }

  key(test){
    console.log(test)
  }

  dateCheck(b: boolean){
    this.dateText= b;
  }

  sourceUpdate(value: string){
    if(value==="Others"){
      this.sourceOthers = false;
    }else{
      this.sourceOthers = true;
    }
  }
  sourceUpdate2(value: boolean){
    if(value){
      this.sourceOthers = value;
    }
  }

  changeCheck1(b: boolean){
    this.valid1=b;
  }
  changeCheck2(b: boolean){
    this.valid2=b;
  }
  changeCheck3(b: boolean){
    this.valid3=b;
  }
  changeCheck4(b: boolean){
    this.valid4=b;
  }
  changeCheck5(b: boolean){
    this.valid5=b;
  }
  changeCheck6(b: boolean){
    this.valid6=b;
  }
  changeCheck7(b: boolean){
    this.valid7=b;
  }
  changeCheck8(b: boolean){
    this.valid8=b;
  }
  changeCheck9(b: boolean){
    this.valid9=b;
  }
  changeCheck10(b: boolean){
    this.valid10=b;
  }
  changeCheck11(b: boolean){
    this.valid11=b;
  }
  changeCheck12(b: boolean){
    this.valid12=b;
  }
  // changeCheck13(b: boolean,event: any): void {
  //   var selectedFile = event.target.files[0];
  //   this.result = 'File Name: ' + selectedFile.name;
  //   this.result += '<br>File Size(byte): ' + selectedFile.size;
  //   this.result += '<br>File Type: ' + selectedFile.type;
  //   this.valid13=b;
  // }

  changeCheck13(b: boolean){
    this.valid13=b;
  }
  changeCheck14(b: boolean){
    this.valid14=b;
  }
  changeCheck15(b: boolean){
    this.valid15=b;
  }
  changeCheck16(b: boolean){
    this.valid16=b;
  }
  changeCheck17(b: boolean){
    this.valid17=b;
  }
  changeCheck18(b: boolean){
    this.valid18=b;
  }


  checkDesc(b: boolean){
    this.descText = b;
  }
}
