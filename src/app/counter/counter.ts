import { Component, effect, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter',
  imports: [ButtonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  protected readonly count = signal(0);
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
