import { Component, ViewChild,  ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserInfo } from '../../userInfo'
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
declare let tinymce: any;

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent {
  @ViewChild("infoForm", { static: false }) infoForm: NgForm;
  title = 'green-form-popup';

  public user: UserInfo;
  closeResult: string;


  public descText: boolean = false;
  public dateText: boolean = false;
  public usernameHTML: any = "";
  public confirmBool: boolean = false;
  public validTest: boolean = false;
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


  // private formTest: FormControl = new FormControl(this.validTest);

  public today = new Date();
  private datePlaceholder: string = "01/02/2019     (day/month/year)";
  public len = 0;

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


  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    //https://stackoverflow.com/questions/50647349/mydatepicker-disablesince-option-in-case-of-date-of-birth-validation?rq=1
    disableSince: { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1 }
  };

  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };
  // public model: any = { };

  dateCheck(b: boolean) {
    this.dateText = b;
  }

  createUser() {
    this.user.username = "John";
  }

  testingUser() {
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

  logInfo() {
    console.log(this.user)
  }

  checkDesc(b: boolean) {
    this.descText = b;
  }

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
}
