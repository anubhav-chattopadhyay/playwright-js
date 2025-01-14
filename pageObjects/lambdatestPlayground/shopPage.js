const {expect} = require('@playwright/test');

exports.ShopPage = class ShopPage{

    constructor(page) {
        this.page = page;
        this.lnkShopByCategory = page.getByRole("button",{name : "Shop by Category"});
        this.lnkLaptopTablets = page.locator("//*[contains(text(),'Laptops & Notebooks')]/ancestor::a");
        this.lnkWindowsSubCategory = page.locator("//figcaption[contains(text(),'Windows (')]");
        this.lnkFirstItem = page.locator("(//div[@class='product-thumb-top']//a)[1]");
        this.selectedItemTitle = page.locator("//div[contains(@class,'entry-content content-title')]/h1");
        this.selectedItemPrice = page.locator("//h3[@data-update='price']");
        this.btnAddToCart = page.locator("(//button[text()='Add to Cart'])[2]");
    }


    async navigateToWindowsLaptop(){
        await this.lnkShopByCategory.click();
        await this.lnkLaptopTablets.click();
        await this.lnkWindowsSubCategory.click();

    }

    async selectFirstItemToCheckout(){
        await this.lnkFirstItem.click();
        await expect(this.selectedItemTitle).toBeVisible();
    }

    async getItemDetailsandAddToCart(){
        const itemName = await this.selectedItemTitle.textContent();
        const itemPrice = await this.selectedItemPrice.textContent();
        await this.btnAddToCart.click();
        const itemDetails = {
            title : itemName,
            price : itemPrice
        }
        return itemDetails;
    }

}
