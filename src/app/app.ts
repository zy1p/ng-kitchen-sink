import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNG } from 'primeng/config';
import { Counter } from './counter/counter';
import { SiteHeader } from './site-header/site-header';
import { SiteFooter } from './site-footer/site-footer';

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
