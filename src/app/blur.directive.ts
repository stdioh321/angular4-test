import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective {
  @Input('appBlur') appHighlight: string;
  el;
  @HostListener('mouseenter') onMouseEnter() {
    // console.log(this.appHighlight);
    this.highlight((!!this.appHighlight ? this.appHighlight : "yellow"));
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  constructor(el: ElementRef, render: Renderer) {
    this.el = el;
  }
  private highlight(color: string) {
    this.el.nativeElement.style.cssText = `background-color : ${color}`;
    // console.log(this.el);
  }
}
