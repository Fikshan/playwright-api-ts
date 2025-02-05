import {Browser, expect, chromium, Page, test as Setup} from '@playwright/test';
import {loginTestData} from '../../utils/test-Data.json'
require('dotenv').config();


Setup('setup', async({})=> {
    const browser :Browser = await chromium.launch({headless :false});
    const context  = await browser.newContext();
    const page: Page = await context.newPage();

    if (!process.env.URL) {
        throw new Error('URL is not defined in the environment variables');
    }
    await page.goto(process.env.URL);
    await page.locator('#input-username').fill(loginTestData.username, { timeout: 10000 });
    await page.locator('#input-password').fill(loginTestData.password, { timeout: 10000 });
    await page.locator('//button[@name = "login-button"]').click();

   
    await expect(page.locator('//a[text()="Logout"]')).toBeVisible({timeout :5000})
    await page.waitForTimeout(2000)

    await page.context().storageState({path: "./login-auth.json"})

    await browser.close();

})



