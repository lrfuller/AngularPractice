import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splitview',
  templateUrl: './splitview.component.html',
  styleUrls: ['./splitview.component.css']
})
export class SplitviewComponent implements OnInit {

  public disabled : boolean = true;
  config: any = {
    height: 250,
    theme: 'modern',
    plugins: 'textcolor wordcount colorpicker textpattern link',
    toolbar: 'bold italic strikethrough forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    branding: false,
    menubar: true,
    statusbar: false
  };
  constructor() { }

  ngOnInit() {
  }

}
