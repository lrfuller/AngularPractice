import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { RequestorDto } from '../requestorDto'
declare let tinymce: any;

@Component({
  selector: 'app-general-editable',
  templateUrl: './general-editable.component.html',
  styleUrls: ['./general-editable.component.css']
})
export class GeneralEditableComponent implements OnInit {

  public user: RequestorDto;
  public len: any = 0;
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

  constructor(private ref: ChangeDetectorRef) {
    this.user = new RequestorDto();
    this.testFields();
    //used to track keyup on the tinymce textarea
    this.config.init_instance_callback = (editor: any) => {
      editor.on('keyup', () => {
        this.getComment(editor);
      });
    };
  
  }

  ngOnInit() {
  }

  saveUser(){
    console.log(this.user);
  }

  //just used to test mock data
  testFields(){
    this.user.resident = "Yes";
    this.user.firstName = "Bob";
    this.user.lastName = "Joe";
    this.user.phoneNumber = 8041234567;
    this.user.email = "test@gmail.com";
    this.user.addressLine1 = "1234 Testville Rd.";
    // this.user.addressLine2 = "";
    this.user.city = "Richmond";
    this.user.state = "VA";
    this.user.zipCode = 11111;
    // this.user.comments = "Lots of comments";
  }

  getComment(editor: any){
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
  }
  

}
