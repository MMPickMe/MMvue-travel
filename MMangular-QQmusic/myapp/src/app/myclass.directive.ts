// import { Directive,HostBinding } from '@angular/core';

// @Directive({
//   selector: '[appMyclass]'
// })
// export class MyclassDirective {

//   constructor() { }
// @HostBinding() innerHTML="hello";
// }



import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyclass]'
})
export class MyclassDirective {

  constructor(private el:ElementRef,private red2:Renderer2) { }
ngOnInit() {
  this.red2.addClass(this.el.nativeElement,'green');

}
}

