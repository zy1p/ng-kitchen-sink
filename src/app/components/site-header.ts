import { Component } from '@angular/core';

@Component({
  selector: 'site-header',
  template: `
    <header class="py-4 border-b">
      <div class="container mx-auto text-center">
        <h1 class="text-3xl font-bold">Angular Kitchen Sink</h1>
      </div>
    </header>
  `,
})
export class SiteHeader {}
