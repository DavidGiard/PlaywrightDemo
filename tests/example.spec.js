// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});

test('test', async ({ page }) => {
  await page.goto('https://forms.microsoft.com/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR7DRhzCsYABDqhMKrAh8dRRUNFVDM1BDM0ZQUkRPVzE5NkFLQUwzSUtJSi4u&route=shorturl');
  await page.getByRole('textbox', { name: '1. What is your name?Required' }).click();
  await page.getByRole('textbox', { name: '1. What is your name?Required' }).fill('Arthur King of the Britons');
  await page.getByRole('textbox', { name: '1. What is your name?Required' }).press('Tab');
  await page.getByRole('textbox', { name: '2. What is your quest?' }).fill('I seek the grail');
  await page.getByRole('radio', { name: 'Blue' }).check();
  await page.getByRole('radio', { name: 'Green' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('button', { name: 'Save my response' })).toBeVisible();
  await expect(page.getByRole('log')).toContainText('Your response was submitted.');
});