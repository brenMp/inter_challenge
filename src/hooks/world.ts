import { setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import { ENV } from '../config/env';

export class MLWorld {
  // info that cucumber needs
  attach: (data: any, mediaType?: string) => void;
  log: (text: string) => void;
  link: (url: string, name: string) => void;
  parameters: any;

  // Playwright resourses
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(opts: IWorldOptions) {
    this.attach = opts.attach;
    this.log = opts.log;
    this.link = opts.link;
    this.parameters = opts.parameters;
  }

  async launch() {
    const browserType = { chromium, firefox, webkit }[ENV.browserName] ?? chromium;
    this.browser = await browserType.launch({ headless: ENV.headless, slowMo: ENV.slowMo });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async cleanup() {
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(MLWorld);

