import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, SiteHeader, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ng-kitchen-sink';
}
