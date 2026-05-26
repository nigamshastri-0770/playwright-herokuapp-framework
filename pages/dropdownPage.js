class DropdownPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
  }

  async goto() {
    await this.page.goto('/dropdown');
  }

  async selectOption(option) {
    await this.dropdown.selectOption(option);
  }

  async getSelectedValue() {
    return await this.dropdown.inputValue();
  }
}

module.exports = DropdownPage;
