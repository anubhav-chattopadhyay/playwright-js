const {expect} = require('@playwright/test');
import { faker } from '@faker-js/faker';

exports.CartCheckoutPage = class CartCheckoutPage{

    constructor(page) {
        this.page = page;
        this.lnkCart = page.locator("(//div[@class='cart-icon'])[1]");
        this.lnkEditCart = page.locator("//a[contains(@href,'route=checkout/cart')]");
        this.lnkViewCart = page.locator("//a[contains(text(),'View Cart')]");
        this.lnkProductTitle = page.locator("//td[@class='text-left']//*[contains(text(),'Reward Points')]/preceding-sibling::a[contains(@href,'route=product/product&product_id=')]");
        this.lnkProductPrice = page.locator("(//td[contains(text(),'$')])[2]");
        this.btnCheckout = page.locator("//a[text()='Checkout']");
        this.txtFirstName = page.locator("//input[@id='input-payment-firstname']");
        this.txtLastName = page.locator("#input-payment-lastname");
        this.txtAddress1 = page.locator("//input[@id='input-payment-address-1']");
        this.txtCity = page.locator("#input-payment-city");
        this.txtZipCode = page.locator("#input-payment-postcode");
        this.drpCountry = page.locator("//select[@id='input-payment-country']");
        this.drpState = page.locator("#input-payment-zone");
        this.cboxAgreeTerms = page.locator("//label[@for='input-agree']");
        this.btnContinue = page.locator("#button-save");
        this.btnConfirmOrder = page.locator("#button-confirm");
        this.lblNewAdress = page.locator("//label[@for='input-payment-address-new']");
        this.lblOrderPlaced = page.locator("//h1[contains(@class,'page-title')]");

    }

    async navigateToCart(){
        // await this.lnkCart.click();
        // await this.lnkEditCart.click();
        await this.lnkViewCart.click();
    }

    async verifyProductDetailsinCart(productDetails){
        await expect(this.lnkProductTitle).toHaveText(productDetails.title);
        await expect(this.lnkProductPrice).toHaveText(productDetails.price);
        await this.btnCheckout.click();
    }

    async addBillingAddress(){
       await this.txtFirstName.fill(faker.person.firstName());
       await this.txtLastName.fill(faker.person.lastName());
       await this.txtAddress1.fill(faker.location.streetAddress());
       await this.txtCity.fill(faker.location.city());
       await this.txtZipCode.fill(faker.location.zipCode('#####'));
       await this.drpCountry.selectOption({index : 2});
       await this.page.waitForTimeout(1000)
       await this.drpState.selectOption({ index : 2 });
    }

    async placeOrder(){
        await this.cboxAgreeTerms.click();
        await this.btnContinue.click();
        await this.btnConfirmOrder.click();
        await expect(this.btnConfirmOrder).toBeHidden();
        await expect(this.lblOrderPlaced).toContainText("Your order has been placed");
    }

}