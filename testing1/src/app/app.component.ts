import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(){
    
  }
  ngOnInit() {
    
    
  }
  title = 'testing1';
  @Input() timeV1;
  @Input() timeV2;

  timeChange1(val){
    console.log(val)
  }
  timeChange2(val){
    console.log(val)
    // console.log(this.timeV2)
  }
}
