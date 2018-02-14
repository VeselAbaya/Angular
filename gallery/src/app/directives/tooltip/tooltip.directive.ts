import {Directive, HostListener, OnInit} from '@angular/core';
import {ElementRef, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[app-tooltip]'
})

export class TooltipDirective implements OnInit {
  @Input('app-tooltip') text: string;
  @Input('app-tooltip-font-size') fontSize: string;

  private span: HTMLElement;
  private element: HTMLElement;
  private HTML: string;

  constructor(el: ElementRef, private render: Renderer) {
    this.element = el.nativeElement;
    this.HTML = this.element.innerHTML;

    this.span = document.createElement('span');
    this.span.innerHTML = this.text;

    this.render.setElementClass(this.element, 'tooltip', true);
    this.render.setElementClass(this.span, 'tooltipText', true);

    this.element.appendChild(this.span);
  }

  ngOnInit() {
    this.span.innerHTML = this.text;
    this.render.setElementStyle(this.span, 'font-size', this.fontSize || '10px');
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
