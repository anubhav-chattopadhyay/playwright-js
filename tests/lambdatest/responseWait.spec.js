const { test, expect, chromium } = require('@playwright/test');
const {LoginPage} = require('../../pageObjects/lambdatestPlayground/loginPage');


test("login to lambdatest playwground and wait for a call in dev tools to complete", async({page})=>{
    
    const loginPg = new LoginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php");
    await loginPg.MyAccount.hover();
    await loginPg.lnkLogin.click();
    
    //define the response promise for specific api call in devtools
    const responsePromise = page.waitForResponse("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

    await loginPg.loginToApplication("randomemail1@gmail.com","lambda");
    //wait till the api call in the dev tools is completed before next transaction
    const response = await responsePromise;
    console.log("response status is " + response.status());
    constole
})
