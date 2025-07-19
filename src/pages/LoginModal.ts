import { Page } from 'playwright';

export class LoginModal {
  constructor(private page: Page) { }

  async isDisplayed(): Promise<boolean> {
    // H1 login txt
    const title = this.page.locator('h1.center-card__title');
    return (await title.isVisible().catch(() => false));
  }
}
