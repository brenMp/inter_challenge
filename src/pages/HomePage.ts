import { Page } from 'playwright';
import { ENV } from '../config/env';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(ENV.baseUrl, { waitUntil: 'domcontentloaded' });
  }

  async search(term: string) {
    // Search box
    const searchBox = this.page.locator('input[name="as_word"]').first();
    await searchBox.fill(term);
    await Promise.all([
      this.page.waitForLoadState('domcontentloaded'),
      searchBox.press('Enter')
    ]);
  }
}

