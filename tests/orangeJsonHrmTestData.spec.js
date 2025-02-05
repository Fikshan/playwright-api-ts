import {test,expect} from '@playwright/test';
import * as OrangeHRMData from '../utils/orangeHRMCreds.json'

test('Orange HRM Application Login with valid JSON Data', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill(OrangeHRMData.validUsername);
    await page.locator('//input[@name="password"]').fill(OrangeHRMData.validPassword);
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test('Orange HRM Application Login with invalid JSON Data', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill(OrangeHRMData.InvalidUsername);
    await page.locator('//input[@name="password"]').fill(OrangeHRMData.InValidPassword);
    console.log(OrangeHRMData.InvalidUsername)
    console.log(OrangeHRMData.InValidPassword)
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator('//p[text()="Invalid credentials"]')).toBeVisible()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});


