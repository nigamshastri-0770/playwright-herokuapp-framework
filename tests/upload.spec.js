const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const UploadPage = require('../pages/uploadPage');

test.describe('File Upload Functionality', () => {

  test('Upload File Successfully', async ({ page }) => {
    const uploadPage = new UploadPage(page);

    const filePath = path.join(__dirname, 'sample.txt');

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, 'Playwright File Upload Test');
    }

    await uploadPage.goto();
    await uploadPage.uploadFile(filePath);

    const uploadedFile = await uploadPage.getUploadedFileName();

    expect(uploadedFile).toContain('sample.txt');
  });

});
