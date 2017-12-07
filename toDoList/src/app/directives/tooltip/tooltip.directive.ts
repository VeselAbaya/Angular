import {Directive, HostListener} from '@angular/core';
import {ElementRef, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[app-tooltip]',
})

export class TooltipDirective {
  // Вопрос:
  // @Input() text: string; // <-- ? Почему-то не хочет считывать строку ?
  // @Input('app-tooltip-font-size') fontSize: string; <-- ? Аналогично во всех директивах ничего не считывается ?

  private span: HTMLElement;
  private element: HTMLElement;
  private HTML: string;

  constructor(el: ElementRef, private render: Renderer) {
    this.element = el.nativeElement;
    this.HTML = this.element.innerHTML;

    this.span = document.createElement('span');
    this.span.innerHTML = this.element.getAttribute('app-tooltip');

    this.render.setElementClass(this.element, 'tooltip', true);
    this.render.setElementClass(this.element, 'tooltip:hover', true);
    this.render.setElementClass(this.span, 'tooltipText', true);
    this.render.setElementClass(this.span, 'tooltipText::after', true);

    this.render.setElementStyle(this.span, 'font-size', this.element.getAttribute('app-tooltip-font-size') || '10px');

    this.element.appendChild(this.span);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.render.setElementStyle(this.span, 'opacity', '1');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.setElementStyle(this.span, 'opacity', '0');
  }
}
