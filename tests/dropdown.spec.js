const { test, expect } = require('@playwright/test');
const DropdownPage = require('../pages/dropdownPage');

test.describe('Dropdown Functionality', () => {

  test('Select Option 1', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.goto();
    await dropdownPage.selectOption('1');

    expect(await dropdownPage.getSelectedValue()).toBe('1');
  });

  test('Select Option 2', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.goto();
    await dropdownPage.selectOption('2');

    expect(await dropdownPage.getSelectedValue()).toBe('2');
  });

});
