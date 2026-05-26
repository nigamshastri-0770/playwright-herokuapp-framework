// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  workers: 2,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false
      },
    },
  ],
});
