const { test, expect, chromium } = require('@playwright/test');
const { assert } = require('console');
const { LoginRegisterPage } = require('../pageObjects/LoginRegister')



test('go to page and check fill register form', async({page}) => {
    
    const loginRegister = new LoginRegisterPage(page);
 await page.goto('https://ecommerce-playground.lambdatest.io/index.php');
 

 //await expect (page).toHaveTitle("Your Store")

// await page.getByRole('link', {name : 'My account'}).first().hover();
const elements = await page.locator("xpath=//div[@data-id='217834']//span[@class='title']").all();
(await elements).forEach(async value=>{
    console.log(await value.textContent());
})


await loginRegister.MyAccount.hover();

await loginRegister.lnkRegister.click();
await loginRegister.txtFirstName.clear();
await loginRegister.txtLastName.fill("randomfirst");

await loginRegister.txtLastName.fill("randomLAst");
await loginRegister.txtEmail.fill("randomFirst.randomLast@email.com");
await loginRegister.txtPhone.fill("8782223423");
await loginRegister.password.fill("autotest");
await loginRegister.txtConfirmPwd.fill("autotest");
await loginRegister.rdbNewsLetter.check();
await loginRegister.chckAgree.click();
await loginRegister.btnContinue.click();

expect(loginRegister.lblWarningRegister).toContainText(" E-Mail Address is already registered!")

await loginRegister.btnContinue.click();
await loginRegister.MyAccount.hover();

await loginRegister.lnkLogin.click();

await loginRegister.txtLoginEmail.fill("randomFirst.randomLast@email.com");
await loginRegister.txtLoginPwd.fill("autotest");
await loginRegister.btnLogin.click();

await loginRegister.MyAccount.hover();

await loginRegister.lnkLogout.click();



});
