const { test, expect } = require('@playwright/test');
const CheckboxesPage = require('../pages/checkboxesPage');

test.describe('Checkbox Functionality', () => {

  test('Select First Checkbox', async ({ page }) => {
    const checkboxPage = new CheckboxesPage(page);

    await checkboxPage.goto();
    await checkboxPage.checkFirstCheckbox();

    await expect(checkboxPage.checkbox1).toBeChecked();
  });

  test('Unselect Second Checkbox', async ({ page }) => {
    const checkboxPage = new CheckboxesPage(page);

    await checkboxPage.goto();
    await checkboxPage.uncheckSecondCheckbox();

    await expect(checkboxPage.checkbox2).not.toBeChecked();
  });

});
