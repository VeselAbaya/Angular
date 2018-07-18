import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[app-timeout]'
})

export class TimeoutDirective {
  @Input('app-timeout') timeout = '60000';
  @Input('app-timeout-routelink') route = '';

  private element: HTMLElement;
  private timeoutId = 0;

  constructor(private el: ElementRef, private router: Router) {
    this.element = el.nativeElement;
  }

  @HostListener('click')
  onClick() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.router.navigate([this.route]);
    }, this.timeout);
  }

  @HostListener('keypress')
  onKeyPress() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.router.navigate([this.route]);
    }, this.timeout);
  }
}
