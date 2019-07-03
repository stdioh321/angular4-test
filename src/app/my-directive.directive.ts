import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    console.log(el);
    // let c = new Event('click');
    // Element.nativeElement.dispatchEvent(c);
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

}
