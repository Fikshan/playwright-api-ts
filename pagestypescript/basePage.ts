import {Page, Locator} from '@playwright/test';

export default class BasePage{
    protected readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    //Common method to navigate to URL
    async launchURL(URL:string){
        await this.page.goto(URL);
    }

    //Common method to click an element
    async clickWebElement(element : Locator){
        await element.click();
    }

    //Common method to enter Text
    async enterText(element:Locator, value:string){
        await element.fill(value);
    }

    //Common method to retrieve text
    async getWebElementText(element:Locator) : Promise<string>{
        const text = await element.textContent();
        if (text === null) {
            throw new Error('Element text content is null');
        }
        return text;
    }

    //Common method to wait for an element to be Visible
    async waitForElementVisible(element:Locator | string){
        if (typeof element === 'string'){
            await this.page.waitForSelector(element, {state:'hidden'});
        } else{
            await element.waitFor({state:'hidden'});
        } 
    } 
}