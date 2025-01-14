const {expect} = require('@playwright/test');

exports.RegisterPage = class RegisterPage{

    constructor(page) {
        this.page = page;
        this.MyAccount = page.locator("xpath=(//span[contains(text(),'My account')])[2]");
        this.lnkRegister = page.locator("xpath=//span[contains(text(),'Register')]");
        this.txtFirstName = page.getByLabel('First Name');
        this.txtLastName = page.getByPlaceholder("First Name");
        this.txtEmail = page.getByLabel("E-Mail");
        this.txtPhone = page.getByLabel("Telephone");
        this.password = page.locator("id=input-password");
        this.txtConfirmPwd = page.getByPlaceholder("Password Confirm");
        this.rdbNewsLetter = page.locator("id=input-newsletter-no");
        this.chckAgree = page.locator("//label[@for='input-agree']");
        this.btnContinue = page.getByRole("button", {name : "Continue"});
        this.lblWarningRegister = page.locator("//div[contains(@class,'alert-danger')]");
        this.lnkLogin = page.locator("xpath=//span[contains(text(),'Login')]");
        this.txtLoginEmail = page.getByLabel("E-Mail Address");
        this.txtLoginPwd = page.getByLabel("Password");
        this.btnLogin = page.getByRole("button",{name : "Login"});
        this.lnkLogout = page.locator("xpath=//span[contains(text(),'Logout')]");

    }
};