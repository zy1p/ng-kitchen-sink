import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  currentYear = new Date().getFullYear();

  protected get getCopyrightText(): string {
    return `© ${this.currentYear} Angular Kitchen Sink. All rights reserved.`;
  }
}
