import {test, expect} from '@playwright/test';
import {POManager} from '../pages/POManager';
import {loginTestData} from '../utils/test-Data.json';
//require('dotenv').config();

test.use({storageState: "./login-auth.json"})

test('Login Test 1 with POM Class methods using session storage', async({page})=>{
   
    if (!process.env.URL) {
        throw new Error("URL is not defined in the environment variables");
    }
    await page.goto(process.env.URL);
    await expect(page.locator(loginTestData.logout)).toBeVisible({timeout :3000})
})

test('validate the file upload functionality on the items page', async({page})=>{

    if (!process.env.URL) {
        throw new Error("URL is not defined in the environment variables");
    }
    await page.goto(process.env.URL);
    await expect(page.locator(loginTestData.logout)).toBeVisible({timeout :3000})

    const poManager =new POManager(page)
    const dashBoardPage = poManager.getdashboardPage()
    await dashBoardPage.navigateToItemsPage();
    await dashBoardPage.fileUpload();
})

test('validate the list of menu items on the dashboard page', async ({page}) => {

    if (!process.env.URL) {
        throw new Error("URL is not defined in the environment variables");
    }
    await page.goto(process.env.URL);
    await expect(page.locator(loginTestData.logout)).toBeVisible({timeout :3000})

    const poManager = new POManager(page)
    const dashBoardPage = poManager.getdashboardPage()
    await dashBoardPage.getElementItems();
 })