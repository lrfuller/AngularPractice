import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight],.appHighlight'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 

  }

  @HostListener('mouseover') onmouseover(){
    this.el.nativeElement.style.backgroundColor= 'yellow';
  }
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.backgroundColor= '';
  }

}
