const {expect} = require('@playwright/test');

exports.LoginPage = class LoginPage{

    constructor(page) {
        this.page = page;
        this.lnkLogin = page.locator("//span[contains(text(),'Login')]/ancestor::a");
        this.txtEmailAddress = page.locator("#input-email");
        this.txtPassword = page.locator("#input-password");
        this.btnLogin = page.locator("#//input[@value='Login']");
    }

    async loginToApplication(userName,userPwd){
        await this.txtEmailAddress.fill(userName);
        await this.txtPassword.fill(userPwd);
        await this.btnLogin.click();
    }

}