import {Directive, HostListener} from '@angular/core';
import {ElementRef, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})

export class TooltipDirective {
  @Input('appTooltip') text: string;

  private span: HTMLElement;
  private element: HTMLElement;
  private HTML: string;

  constructor(el: ElementRef, private render: Renderer) {
    this.element = el.nativeElement;
    this.HTML = this.element.innerHTML;
    this.span = document.createElement('span');
    this.span.innerHTML = this.text;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.appendChild(this.span);
    this.render.setElementClass(this.element, 'tooltip', true);
    this.render.setElementClass(this.element, 'tooltip:hover', true);
    this.render.setElementClass(this.span, 'tooltipText', true);
    this.render.setElementClass(this.span, 'tooltipText::after', true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.removeChild(this.span);
    this.render.setElementClass(this.element, 'tooltip', false);
    this.render.setElementClass(this.element, 'tooltip:hover', false);
    this.render.setElementClass(this.span, 'tooltipText', false);
    this.render.setElementClass(this.span, 'tooltipText::after', false);
  }
}
