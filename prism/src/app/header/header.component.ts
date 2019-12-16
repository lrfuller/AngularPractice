import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { userDto } from '../userDto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //used for telling when the user has scrolled
  // @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;

  stickyLeftNav: boolean = false;
  stickyHeader: boolean = false;
  elementPosition: any;
  public userName: any;
  user: userDto;


  constructor(private router: Router,
    ) { 
      // this.userName = sessionStorage.getItem('userName');

      
  }

  ngOnInit() {
    //google translate scripts
    this.loadScript('assets/js/menu.js');
    this.loadScript('assets/js/translate.js');
  }

  // used for google translate
  public loadScript(url) {
    //console.log('preparing to load menu and translate...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  // initalizeUser1(){
  //   this.user.userName= sessionStorage.getItem('userName');
  //   this.user.password= sessionStorage.getItem('password');
  //   this.user.role= sessionStorage.getItem('role'); //just as a test, 2 should give access to the homepage link and general requests page link
  // }
  
  // homeClick(){
  //   this.router.navigate(['/home']);
  // }
  logoutClick(){
    this.router.navigate(['/login']);
    // sessionStorage.removeItem('userName');
    // sessionStorage.removeItem('password');
  }
  



  // ngAfterViewInit(){
  //   this.elementPosition = this.menuElement.nativeElement.offsetTop;
  // }

  // @HostListener('window:load', ['$event'])
  //   handleScroll(){
  //     const windowScroll = window.pageYOffset;
  //     if(windowScroll >= this.elementPosition){
  //       this.stickyLeftNav = true;
  //       this.stickyHeader = true;
  //     } else {
  //       this.stickyLeftNav = false;
  //       this.stickyHeader = false;
  //     }
  //   }

}
