class UploadPage {
  constructor(page) {
    this.page = page;

    this.uploadInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFile = page.locator('#uploaded-files');
  }

  async goto() {
    await this.page.goto('/upload');
  }

  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  async getUploadedFileName() {
    return await this.uploadedFile.textContent();
  }
}

module.exports = UploadPage;
