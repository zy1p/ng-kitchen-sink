import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, SiteHeader, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'ng-kitchen-sink';

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
