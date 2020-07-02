import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserInfo } from 'src/userInfo';
import { NgbModalOptions, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IMyDpOptions } from 'mydatepicker';
import { assignment } from '../../assignment';
// import { CurrencyPipe} from '@angular/common';
declare let tinymce: any;

@Component({
  selector: 'app-under-processing',
  templateUrl: './under-processing.component.html',
  styleUrls: ['./under-processing.component.css']
})
export class UnderProcessingComponent{

  public user: UserInfo;
  public tableA: assignment;
  // tableObject: Array<assignment>;


  public descText: boolean = false;
  public view1 : boolean = false;
  public view2: boolean = false;
  public view3: boolean = false;
  public view4: boolean = false;
  public view5: boolean = false;
  public view6: boolean = false;
  public view7 : boolean = false;
  public view8: boolean = false;
  public view9: boolean = false;
  public view10: boolean = false;
  public view11: boolean = false;
  public view12: boolean = false;
  public viewed1: boolean = false;
  public viewed2: boolean = false;
  // public view1Valid: boolean = false;
  // public view2Valid: boolean = false;
  // public view3Valid: boolean = false;
  // public view4Valid: boolean = false;
  // public view5Valid: boolean = false;
  // public view6Valid: boolean = false;
  // public view7Valid: boolean = false;
  // public view8Valid: boolean = false;
  // public view9Valid: boolean = false;
  // public view10Valid: boolean = false;
  // public view11Valid: boolean = false;
  // public view12Valid: boolean = false;

  public matchBool: boolean = false;
  public reasonBool: boolean = false;
  public expectedDateBool: boolean = false;

  //converting date to string
  public dateString: string;
  private today = new Date();
  private todayOWL = new Date();

  public len = 0;
  // public phoneLen = 0;
  // public emailLen = 0;
  
  // public tickets: ["Division 1", "Billy Johnson", "medium", "Comment 1 test", "09/01/2020", "02/21/2020", "Closed", "$1.01"];

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
    this.tableA = new assignment();
    // this.tableObject = new Array<assignment>();

    this.testingUser();
    // this.dateString = JSON.stringify(this.user.date)
    // console.log(this.dateString)
    
    // this.testTicket();


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

  open2(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      windowClass: 'newPopup2'
    };
    this.modalService.open(content,ngbModalOptions)
  }

  open3(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      windowClass: 'newPopup3'
    };
    this.modalService.open(content,ngbModalOptions)
  }

  open4(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      windowClass: 'newPopup2'
    };
    this.modalService.open(content,ngbModalOptions)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private datePlaceholder: string = "MM/DD/CCYY";

//   public myDatePickerOptionsDisablePastToday: IMyDpOptions = {
//     dateFormat: 'mm/dd/yyyy',
//     //https://stackoverflow.com/questions/50647349/mydatepicker-disablesince-option-in-case-of-date-of-birth-validation?rq=1
//     disableSince: { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1 }
// };
public myDatePickerOptions: IMyDpOptions = {
  dateFormat: 'mm/dd/yyyy'
};

// Initialized to specific date (09/10/2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };

  testingUser(){
    this.user.resident = "Yes";
    this.user.category = "Land Records";
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

    this.user.expectedDate  = {date: {year: 2019, month: 10, day: 9}};

    this.user.tickedID = "111DMKJ";
    this.user.status = "Open";
    this.user.date = {date: {year: 2018, month: 10, day: 9}};
    this.user.source = "Phone";
  }

  getData(editor: any) {
    this.len = 0;
    // this.phoneLen = 0;
    // this.emailLen = 0;
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

  checkDesc(b: boolean){
    this.descText = b;
  }

  logInfo(){
    console.log(this.user)
  }

  viewStart(){
    if (this.viewed1===false){
      this.view1=true; 
      this.viewed1=true  
    }
  }

  validFOIAchange(){
      this.reasonBool = false;
  }

  // expectedDateCheck(b: boolean){
  //   this.expectedDateBool = b;
  // }

  logAssignment(){
    console.log(this.tableA)
  }

  // testTicket(){
  //   this.tableObject[0].division = "Division 1";
  //   this.tableObject[0].assignedTo = "Billy Johnson";
  //   this.tableObject[0].priority = "medium";
  //   this.tableObject[0].comment = "Comment 1 by Billy";
  //   this.tableObject[0].expectedClosedDate = {date: {year: 2020, month: 1, day: 9}};
  //   this.tableObject[0].responseDate = {date: {year: 2020, month: 2, day: 21}};
  //   this.tableObject[0].status = "Closed";
  //   this.tableObject[0].estimation = "$1.01";
  // }

}
