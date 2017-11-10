import {Component, Input} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <p *ngIf="completedTasksCount != allTasksCount"> Tasks completed: {{completedTasksCount}} of {{allTasksCount}}</p>
  <p *ngIf="completedTasksCount == allTasksCount"> All tasks completed </p>
  `,
  styles: [``]
})

export class CounterComponent {
  @Input() allTasksCount = 0;
  @Input() completedTasksCount = 0;
}
