import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeneralRequests';
  // @ViewChild('nav-original-tab', { static: false }) originalTab: ElementRef;

  constructor(){
    // console.log(this.originalTab.nativeElement);
    this.loadScript('assets/js/translate.js');
    this.loadScript('assets/js/menu.js');
  }
  loadScript(url) {
    //console.log('preparing to load menu and translate...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
