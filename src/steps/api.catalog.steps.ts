import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import axios from 'axios';
import { API } from '../config/api';

let lastApiResp: any;

When('I GET the MLA site configuration', async function() {
  const { data } = await axios.get(API.site);
  lastApiResp = data;
});

Then('the site id should be {string}', function(expected: string) {
  expect(lastApiResp.id).to.equal(expected);
});

Then('the default currency id should be {string}', function(expected: string) {
  expect(lastApiResp.default_currency_id).to.equal(expected);
});

When('I GET the list of currencies', async function() {
  const { data } = await axios.get(API.currencies);
  lastApiResp = data;
});

Then('the response should contain currency code {string}', function(code: string) {
  const found = lastApiResp.some((c: any) => c.id === code);
  expect(found, `Currency ${code} not found`).to.be.true;
});

When('I GET the list of countries', async function() {
  const { data } = await axios.get(API.countries);
  lastApiResp = data;
});

Then('the response should contain country id {string}', function(id: string) {
  const found = lastApiResp.some((c: any) => c.id === id);
  expect(found, `Country ${id} not found`).to.be.true;
});
