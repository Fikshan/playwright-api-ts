import { test, expect } from "@playwright/test";

export class dahboardPage {
  //Locators
  constructor(page) {
    this.page = page;
    this.moduleListItems = page.getByRole("link", {
      name: "Items",
      exact: true,
    });
    this.firstCheckBox = page.locator('//table[@id="table"]/tbody/tr[1]/td[1]/label/input');
    this.deleteItems = page.locator('//button[@id="delete"]');
    this.csvImport = page.getByTitle('Item Import from CSV')
    this.fileSelect = page.locator('#file_path')
    this.submit = page.locator('#submit')
    this.homeModuleList = page.locator('div#home_module_list');
    this.moduleItems = this.homeModuleList.locator('div.module_item');
    this.Header = page.getByRole('heading', { name: 'Welcome to OSPOS, click a module below to get started.' })

    
  }

  async navigateToItemsPage() {
    await this.moduleListItems.click({ timeout: 10000 });
    const title = await this.page.title();
    console.log("Page Title:", title);
    expect(title).toContain("S kart | Powered by OSPOS 3.3.7");
    await this.firstCheckBox.click({ timeout: 10000 });

    //you have to add a listner before actual alert prompt appears

    this.page.on("dialog", async (dialog) => {
      console.log(`Dialog type is : ${dialog.type()}`);
      dialog.dismiss();
      console.log(`Popup message is : ${dialog.message()}`);
    });

    await this.deleteItems.click({ ttimeout: 5000 });
  }

  async fileUpload(){
    await this.csvImport.click()
    await this.fileSelect.setInputFiles('./upload/sample_bulk_enrollment.csv')
    await this.submit.click();
  }

  async getElementItems(){
    const HeadertText = await this.Header.textContent();
    console.log(HeadertText);
  
    const count = await this.moduleItems.count();
    console.log('count of the moduleItems is '  ,count)
  //   for (let i = 0; i < count; ++i) 
  // {
  //   //console.log(i);
  //   console.log(await this.moduleItems.nth(i).textContent());
  // }
  for (const moduleItem of await this.moduleItems.all()) {
    console.log(await moduleItem.textContent());
  }

}}
