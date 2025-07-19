import { Page } from 'playwright';

export class ProductPage {
  constructor(private page: Page) {}

  async clickBuyNow() {
    const buyBtn = this.page.getByRole('button', { name: /Comprar ahora/i }).first();
    await buyBtn.click();
  }
}
