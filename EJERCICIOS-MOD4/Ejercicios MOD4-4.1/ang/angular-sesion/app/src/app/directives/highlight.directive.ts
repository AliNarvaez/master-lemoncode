import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input("appHighlight")
  color!: string;

  private defaultColor = 'pink';

   @HostListener('mouseenter')
   onMouseEnterEvent() {
    this.highlight(this.color || this.defaultColor);
   }

   @HostListener('mouseleave')
   onMouseLeaveEvent() {
    this.highlight('');
   }

   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   }

}
