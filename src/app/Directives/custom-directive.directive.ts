import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(public elem: ElementRef) {
this.elem.nativeElement.style.color = 'darkblue';
this.elem.nativeElement.style.fontWeight='bold';
   }

@HostListener('mouseenter') omMouseEnter(){
  this.elem.nativeElement.style.color = 'red';
}

@HostListener('mouseleave') onMouseLeave() {
  this.elem.nativeElement.style.color = 'green'; // this.highlightColor;
}

}
