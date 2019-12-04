import { Component, OnInit } from '@angular/core';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  // constructor(private localSt:LocalStorageService, 
  //   private sessionSt:SessionStorageService) {
    
  //  }

  constructor() {
    
   }

  ngOnInit() {
  }

  // setLocalStorage(){
  //   this.localSt.store('userName', 'Bob');
  // }
  // getLocalStorage(){
  //   this.localSt.retrieve('userName');
  // }
  // delLocalStorage(){
  //   this.localSt.clear('boundValue');
  // }

  // setSessionStorage(){
  //   this.sessionSt.store('logged-in', 'user');
  // }
  // getSessionStorage(){
  //   this.sessionSt.retrieve('logged-in');
  // }
  // delSessionStorage(){
  //   this.sessionSt.clear('logged-in');
  // }
  setLocalStorage(){
    localStorage.setItem('userName', 'Bob');
  }
  getLocalStorage(){
    console.log(localStorage.getItem('userName'));
  }
  delLocalStorage(){
    localStorage.removeItem('userName');
  }
  setSessionStorage(){
    sessionStorage.setItem('logged-in', 'user');
  }
  getSessionStorage(){
    console.log(sessionStorage.getItem('logged-in'));
  }
  delSessionStorage(){
    sessionStorage.removeItem('logged-in');
  }
  
  

}
