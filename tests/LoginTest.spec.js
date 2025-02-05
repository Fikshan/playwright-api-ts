import {test, expect} from '@playwright/test';
//import {LoginPage} from '../pages/loginPage';
//import { dahboardPage } from '../pages/dashboardPage'; //you have to import all Files and we have to create a object instance for every class

import {POManager} from '../pages/POManager';

import {loginTestData} from '../utils/test-Data.json'
require('dotenv').config();
//const LoginPage = require('../pages/loginPage.js')

test('Login Test Functionality', async ({page}) => {
   const loginPage = new LoginPage(page);
   await loginPage.navigateToURL();
   await loginPage.validlogin(loginTestData.username, loginTestData.password);
   
})

test('Dashboard Test Functionality', async ({page}) => {

      const PM =new POManager(page)
      //const LP = new LoginPage(page);

   const LP =  PM.getLoginPage();
   await LP.navigateToURL();
   await LP.validlogin(loginTestData.username, loginTestData.password)

   //await LP.validlogin(loginTestData.username, loginTestData.password);

   //const dP = new dahboardPage(page);
   const DP1 = PM.getdashboardPage()
   await DP1.navigateToItemsPage();
   await DP1.fileUpload();
   //await dP.alertPopup();

   

})

test('Assertion Menu Items  Functionality', async ({page}) => {

   const PM =new POManager(page)
   //const LP = new LoginPage(page);

const LP =  PM.getLoginPage();
await LP.navigateToURL();
await LP.validlogin(loginTestData.username, loginTestData.password)
const DP1 = PM.getdashboardPage()
await DP1.getElementItems();



})