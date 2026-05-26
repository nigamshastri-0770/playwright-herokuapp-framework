class CheckboxesPage {
  constructor(page) {
    this.page = page;

    this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
  }

  async goto() {
    await this.page.goto('/checkboxes');
  }

  async checkFirstCheckbox() {
    await this.checkbox1.check();
  }

  async uncheckSecondCheckbox() {
    await this.checkbox2.uncheck();
  }
}

module.exports = CheckboxesPage;
