import {test, expect} from '@playwright/test';

const credentials =[
    {
        "username" : "admin",
        "password" : "admin123"
    },
    {   
        "username" : "admin1",
        "password" : "pointof"
    }
]

credentials.forEach(data=>{
    test(`Parametrize Test Data for POS Application ${data.username} + ${data.password}`, async({page}) =>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('//input[@name="username"]').fill(data.username);
        await page.locator('//input[@name="password"]').fill(data.password);
        await page.setDefaultTimeout('10000')
        await page.locator('//button[@type="submit"]').click()
        await page.setDefaultTimeout('10000')
        // await page.locator ('.oxd-userdropdown-name').click()
        // await page.locator('text=Logout').click()
        // const titleOfThePageis = await page.title();
        // console.log(`titleOfThePage is: ${titleOfThePageis}`)
    })
})


