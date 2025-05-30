import { Component } from '@angular/core';

@Component({
  selector: 'site-footer',
  template: `
    <footer class="border-t py-4">
      <div class="container mx-auto text-center">
        <p>{{ getCopyrightText }}</p>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  currentYear = new Date().getFullYear();

  get getCopyrightText(): string {
    return `© ${this.currentYear} Angular Kitchen Sink. All rights reserved.`;
  }
}
