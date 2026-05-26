const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const data = require('../utils/testData');

test.describe('Login Functionality', () => {

  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(data.validUsername, data.validPassword);

    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('h2')).toContainText('Secure Area');
  });

  test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(data.validUsername, data.invalidPassword);

    const message = await loginPage.getMessage();
    expect(message).toContain('Your password is invalid!');
  });

});
