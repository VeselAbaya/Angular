import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[app-timeout]'
})

export class TimeoutDirective {
  // @Input('app-timeout') timeout = 60000;
  @Input('app-timeout-routelink') route: string;

  private element: HTMLElement;
  private timeoutId = 0;

  constructor(private el: ElementRef, private router: Router) {
    this.element = el.nativeElement;
  }

  @HostListener('click')
  onClick() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.router.navigate([this.element.getAttribute('app-timeout-routelink') || '']);
    }, this.element.getAttribute('app-timeout') || 5000);
  }

  @HostListener('keypress')
  onKeyPress() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.router.navigate([this.element.getAttribute('app-timeout-routelink') || '']);
    }, this.element.getAttribute('app-timeout') || 5000);
  }
}

// Вопрос:
// Не могу понять почему такая схема не работает:
// При mousemove'е я отменяю предыдущий таймаут и ставлю новый. То есть если долго нет mousemove'а то таймаут не оменяется
// и срабатывает через установленное время. А тут все в любом случае каждые пять секунд кидает меня на другой роут.
