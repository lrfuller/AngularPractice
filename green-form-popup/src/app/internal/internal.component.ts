import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '../../userInfo'
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
declare let tinymce: any;

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent {
  @ViewChild("infoForm",{static: false}) infoForm: NgForm;
  title = 'green-form-popup';

  public user : UserInfo;
  closeResult: string;
  

  public descText: boolean = false;
  public dateText: boolean = false;
  public view1: boolean = true;
  public view2: boolean = false;
  public view3: boolean = false;
  public view4: boolean = false;
  public view5: boolean = false;
  public view6: boolean = false;
  // public usernameTS: string = "";
  public viewed1: boolean = false;
  public viewed2: boolean = false;
  // public view1Valid: boolean = false;
  // public view2Valid: boolean = false;
  // public view3Valid: boolean = false;
  // public view4Valid: boolean = false;
  // public view5Valid: boolean = false;
  // public view6Valid: boolean = false;
  public canView2: boolean = false;
  public usernameHTML: any="";
  public confirmBool: boolean = false;
  public validTest: boolean = false;
  public formFinished: boolean = false;

  //input field validation
  public phone1: boolean = false;
  public phone2: boolean = false;

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
  //input fields valid
  

  private datePlaceholder: string = "01/02/2019     (day/month/year)";

  // private formTest: FormControl = new FormControl(this.validTest);

  private today = new Date();
  public len = 0;

  constructor(private modalService: NgbModal, private ref: ChangeDetectorRef) {
    this.user = new UserInfo();
    this.createUser();
    this.testingUser();

    this.config.init_instance_callback = (editor: any) => {
      editor.on('keyup', () => {
        this.getData(editor);
      });
    };
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

    this.user.subject = "Test";
    this.user.description = "Testing 123";
    this.user.fee = true;
    this.user.submit = true;
  }

  logInfo(){
    console.log(this.user)
  }

  // change1(change: boolean){
  //   this.view1Valid = change;
  // }

  // change2(change: boolean){
  //   this.view2Valid = change;
  // }

  // change3(changeValue){
  //   if(changeValue!=""){
  //     this.view3Valid = true;
  //     console.log(this.view3Valid)
  //   }else{
  //     this.view3Valid = false;
  //   }
  // }

    dateCheck(b: boolean){
    this.dateText= b;
  }

  checkDesc(b: boolean){
    this.descText = b;
  }

  step6(){
    this.formFinished = true;
  }



}
