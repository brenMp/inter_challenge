import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { MLWorld } from '../hooks/world';
import { ENV } from '../config/env';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { LoginModal } from '../pages/LoginModal';


function pages(world: MLWorld) {
  const { page } = world;
  return {
    home: new HomePage(page),
    results: new ResultsPage(page),
    product: new ProductPage(page),
    login: new LoginModal(page)
  };
}

function getPages(world: MLWorld) {
  const { page } = world;
  return {
    home: new HomePage(page),
    results: new ResultsPage(page),
    product: new ProductPage(page),
    login: new LoginModal(page),
  };
}

Given('I am on the Mercado Libre Argentina home page', async function(this: MLWorld) {
  const { home } = pages(this);
  await home.open();
});

When('I search for {string}', async function(this: MLWorld, term: string) {
  const { home } = pages(this);
  await home.search(term);
});

When('I filter results by storage {string}', async function(this: MLWorld, raw: string) {
  //const storage = resolveStorageParam(raw);
  const { results } = getPages(this);
  await results.filterBystorageML();
});


Then('I should see search results that contain {string}', async function(this: MLWorld, text: string) {
  const { results } = pages(this);
  const found = await results.hasResultContaining(text);
  expect(found, `Expected results listing to include text: ${text}`).to.be.true;
});

When('I open the first result', async function(this: MLWorld) {
  const { results } = pages(this);
  await results.openFirstResult();
});

When('I click Buy Now', async function(this: MLWorld) {
  const { product } = pages(this);
  await product.clickBuyNow();
});

Then('I should be asked to log in', async function(this: MLWorld) {
  const { login } = pages(this);
  const shown = await login.isDisplayed();
  expect(shown, 'Expected login prompt to display').to.be.true;
});
