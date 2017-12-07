import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[app-timeout]'
})

export class TimeoutDirective {
  // @Input('app-timeout') timeout = 60000;
  // @Input('app-timeout-routelink') route: string;

  private element: HTMLElement;

  constructor(private el: ElementRef, private router: Router) {
    this.element = el.nativeElement;
  }

  private timeoutId: number = setTimeout(() => {
      this.router.navigate([this.element.getAttribute('app-timeout-routelink') || '']);
      }, this.element.getAttribute('app-timeout') || 5000);

  @HostListener('mousemove')
  onMouseMove() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.router.navigate([this.element.getAttribute('app-timeout-routelink') || '']);
    }, this.element.getAttribute('app-timeout') || 5000);
  }
}

// Не могу понять почему такая схема не работает:
// При mousemove'е я отменяю предыдущий таймаут и ставлю новый. То есть если долго нет mousemove'а то таймаут не оменяется
// и срабатывает через установленное время. А тут все в любом случае каждые пять секунд кидает меня на другой роут.
