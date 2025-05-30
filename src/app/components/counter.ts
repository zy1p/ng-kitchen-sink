import { Component, effect, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'counter',
  imports: [ButtonModule],
  template: `
    <p-button
      icon="pi pi-plus"
      severity="secondary"
      size="small"
      [rounded]="true"
      (click)="increment()"
      class=""
    />
    <span class="px-2"> count: {{ count() }} </span>
    <p-button
      icon="pi pi-minus"
      severity="secondary"
      size="small"
      [rounded]="true"
      (click)="decrement()"
      class=""
    />
  `,
})
export class Counter {
  readonly count = signal(0);
  constructor() {
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
