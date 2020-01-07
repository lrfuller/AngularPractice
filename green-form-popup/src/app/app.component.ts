import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'green-form-popup';

  public view1: boolean = true;
  public view2: boolean = false;
  public view3: boolean = false;
  public view4: boolean = false;
  public view5: boolean = false;
  public view6: boolean = false;
  public usernameTS: string = "";

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      windowClass: 'newPopup'
    };
    this.modalService.open(content,ngbModalOptions)
  }

  // open2(content) {
  //   let ngbModalOptions: NgbModalOptions = {
  //     backdrop: 'static',
  //     keyboard: true,
  //     windowClass: 'newPopup2'
  //   };
  //   this.modalService.open(content,ngbModalOptions)
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
