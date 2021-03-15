import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logic1';
  testVal = "testVal"

  // testObj: [
  //   {"index1": 1},
  //   {"index1": 2}
  // ];

  constructor(){
    this.secondFunction();
  }
   firstFunction(val, _callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    console.log(val)
    this.thirdFunction()
    _callback();
}

 secondFunction(){
    // call first function and pass in a callback function which
    // first function runs when it has completed


    //first call
    this.firstFunction(this.testVal, function() {
      //won't call this line UNTIL callback is called within firstFunction
        console.log('huzzah, I\'m done!');
    });    
}
thirdFunction(){
  console.log("thirdFunction")
}

  
}
