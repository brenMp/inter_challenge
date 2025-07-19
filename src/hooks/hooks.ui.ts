import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { MLWorld } from './world';

// Launch browser before any @ui scenario
Before({ tags: '@ui' }, async function(this: MLWorld) {
  await this.launch();
});

// Screenshot + close after @ui scenario
After({ tags: '@ui' }, async function(this: MLWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const png = await this.page.screenshot();
    this.attach(png, 'image/png');
  }
  await this.cleanup();
});

setDefaultTimeout(60 * 1000);
