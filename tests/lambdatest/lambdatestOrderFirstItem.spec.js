const { test, expect, chromium } = require('@playwright/test');
const {LoginPage} = require('../../pageObjects/lambdatestPlayground/loginPage');
const { ShopPage} = require('../../pageObjects/lambdatestPlayground/shopPage');
const {CartCheckoutPage} = require('../../pageObjects/lambdatestPlayground/cartCheckoutPage');

test("login to lambdatest playwground->navigate to laptop and tablet and order first item on search", async({page})=>{
    
    const loginPg = new LoginPage(page);
    const shopPg = new ShopPage(page);
    const cartCheckoutPg = new CartCheckoutPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php");
    await loginPg.MyAccount.hover();
    await loginPg.lnkLogin.click();
    const responsePromise = page.waitForResponse("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await loginPg.loginToApplication("randomemail1@gmail.com","lambda");
    //define the response promise for specific api call in devtools
    const response = await responsePromise;
     expect(response.status()).toEqual(200);

     await shopPg.navigateToWindowsLaptop();
     await shopPg.selectFirstItemToCheckout();
     const itemDetails = await shopPg.getItemDetailsandAddToCart();

    await cartCheckoutPg.navigateToCart();

    await cartCheckoutPg.verifyProductDetailsinCart(itemDetails);
    await cartCheckoutPg.addBillingAddress();
    await cartCheckoutPg.placeOrder();


})
