import { test, expect } from "@playwright/test";

require('dotenv').config();

export class LoginPage {

    //Locators
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.username = page.locator('#input-username') //LocalVariables
        this.password = page.locator('#input-password')
        this.goButton = page.locator('//button[@name = "login-button"]')

    }

    //URL
    async navigateToURL(){
        await this.page.goto(process.env.URL)
    }

    //action
   async validlogin(username, password){
       await this.username.fill(username, { timeout: 10000 })
       await this.password.fill(password, { timeout: 10000 })
       await this.goButton.click()
       const title1 = await this.page.title()
       console.log('Title of the Page :', title1);
       expect(title1).toBe('S kart | Powered by OSPOS 3.3.7')
       
    }
}

//module.exports= {()}

