import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { RequestorDto } from '../requestorDto'

@Component({
  selector: 'app-general-editable',
  templateUrl: './general-editable.component.html',
  styleUrls: ['./general-editable.component.css']
})
export class GeneralEditableComponent implements OnInit {

  public user: RequestorDto;
  constructor() {
    this.user = new RequestorDto();
  }

  ngOnInit() {
  }

  saveUser(){
    console.log(this.user);
  }

  

}
