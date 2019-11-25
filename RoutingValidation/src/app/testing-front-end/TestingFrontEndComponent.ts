import { Component } from '@angular/core';
@Component({
  selector: 'app-testing-front-end',
  templateUrl: './testing-front-end.component.html',
  styleUrls: ['./testing-front-end.component.css']
})
export class TestingFrontEndComponent {
  getPrint() {
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
  blurEvent(event) {
    // event.target.id.value.toUpperCase();
    // console.log(event.target.id.toUpperCase());
    // console.log(event.target.tagName.toUpperCase);
  }
}
