import {
  Directive,
  ElementRef,
  HostListener,
  Input, Renderer2
} from "@angular/core";

@Directive({
	selector: '[app-highlight]'
})

export class HighlightDirective {
	@Input('app-highlight') highlightColor: string;

	private element: HTMLElement;

	constructor(el: ElementRef, private renderer: Renderer2) {
		this.element = el.nativeElement;
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.highlight(this.highlightColor || 'yellow');
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.highlight(null);
	}


	highlight(color: string) {
		this.element.style.backgroundColor = color;
	}
}
