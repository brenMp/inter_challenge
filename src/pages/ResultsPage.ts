import { Page, BrowserContext } from 'playwright';

export class ResultsPage {
  constructor(private page: Page) { }

  async filterByStorage(storage: string) {

    const storageLocator = this.page.getByRole('link', { name: storage }).first();
    if (await storageLocator.isVisible().catch(() => false)) {
      await storageLocator.click();
      await this.page.waitForLoadState('domcontentloaded');
    }
  }

  async filterBystorageML() {
    // Gets <div> who contains <h3> with text “Memoria interna”
    const section = this.page.locator('div.ui-search-filter-dl', {
      has: this.page.locator('h3.ui-search-filter-dt-title', { hasText: 'Memoria interna' })
    });

    // clicks ob the first <li>
    await section.locator('ul > li.ui-search-filter-container').first().click();
  }

  async hasResultContaining(text: string): Promise<boolean> {
    return this.page.locator(`text=${text}`).first().isVisible().catch(() => false);
  }

  async openFirstResult() {
    // Get first option of the results
    const firstResult = this.page.locator('ol.ui-search-layout.ui-search-layout--stack > li').first();
    await firstResult.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async noResultsShown(): Promise<boolean> {
    return this.page.locator('text=No hay publicaciones que coincidan').isVisible().catch(() => false);
  }
}
