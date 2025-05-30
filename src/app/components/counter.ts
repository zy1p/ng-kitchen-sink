import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'counter',
  template: `
    <button (click)="increment()" class="border rounded-md px-1">
      Increment
    </button>
    <p>count: {{ count }}</p>
  `,
})
export class Counter {
  count = 0;

  increment() {
    this.count++;
  }
}
