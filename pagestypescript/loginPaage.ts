import {Page, Locator, expect} from '@playwright/test'
import BasePage from '../pagestypescript/basePage';

export class LoginPaage extends BasePage {
    
    protected readonly page:Page;
    public readonly username:Locator;
    private readonly password:Locator;
    private readonly goButton:Locator;

    /** */
    constructor(page:Page){
        super(page)
        this.page = page;
        this.username = page.locator('#input-username') //LocalVariables
        this.password = page.locator('#input-password')
        this.goButton = page.locator('//button[@name = "login-button"]')
    }

    async navigateToURL(){
            await this.page.goto('https://pos.aksharatraining.in/pos/public/',{ waitUntil: 'load', timeout: 30000 });
        }
    
        //action
       async validlogin(username:string, password:string){
        //    await this.username.fill(username, { timeout: 10000 })
        //    await this.password.fill(password, { timeout: 10000 })
        //    await this.goButton.click()
        //    const title2 = await this.page.title()
        //    console.log('Title of the Page :', title2);
        //    expect(title2).toBe('S kart | Powered by OSPOS 3.3.7')



        await this.enterText(this.username, username);
        await this.enterText(this.password, password);
        await this.clickWebElement(this.goButton);

            // Wait for the username field to be visible:
            // await this.page.locator('#input-username').waitFor({ state: 'visible', timeout: 10000 });
            // await this.username.fill(username, { timeout: 10000 });
        
            // // Wait for the password field to be visible:
            // await this.page.locator('#input-password').waitFor({ state: 'visible', timeout: 10000 }); // Or this.password.waitFor(...)
            // await this.password.fill(password, { timeout: 10000 });
        
        
            // // Wait for the login button to be enabled (clickable):
            // await this.page.locator('//button[@name = "login-button"]').waitFor({ state: 'visible', timeout: 10000 }); // Or this.goButton.waitFor(...)
            // await this.goButton.click();
        
            // const title1 = await this.page.title();
            // console.log('Title of the Page :', title1);
            // expect(title1).toBe('S kart | Powered by OSPOS 3.3.7');
        }
    }

