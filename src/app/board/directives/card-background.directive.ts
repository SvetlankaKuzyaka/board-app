import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardBackground]'
})
export class CardBackgroundDirective implements OnInit {
  @Input('appCardBackground') dueDate : Date | string
  @Input() isDoneSection : boolean

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const currentDate = new Date();
    const dueDate = this.dueDate ? new Date(this.dueDate) : false;
    if (dueDate) {
      const deltaDate = Math.ceil((dueDate.getTime() - currentDate.getTime()) / _MS_PER_DAY);
    if (deltaDate < 7 && !this.isDoneSection) this.renderer.setStyle(this.elementRef.nativeElement, "background", "yellow");
    if (deltaDate < 3 && !this.isDoneSection) this.renderer.setStyle(this.elementRef.nativeElement, "background", "red");
    }
  }

}
