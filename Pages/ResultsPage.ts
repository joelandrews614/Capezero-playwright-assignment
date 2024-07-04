import {Page, expect} from "@playwright/test"

export default class ResultsPage{

    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Locators: 
    pumaFilterLi = () => this.page.locator("//li[@id='p_123/256097']/span/a/div"); 
    seeMoreLink = () => this.page.locator("//a[@aria-label='See more, Brands']");
    resultsTitleSpan = () => this.page.locator("//span[@class='a-size-base-plus a-color-base']")
    pumaProduct01CartBtn = () => this.page.locator("//div[@cel_widget_id='MAIN-SEARCH_RESULTS-3']//button")
    pumaProduct01CartPopupBtn = () => this.page.locator("//div[@id='a-popover-content-2']//button")
    cartLink = () => this.page.locator("//a[@id='nav-cart']")
    cartPumaProduct = () => this.page.locator("//span[@class='a-truncate-cut']")

    // Actions:

    async clickPumaFilterLi(){
        await this.pumaFilterLi().click();
    }

    async validatePumaProductTitles(){
        await expect(this.resultsTitleSpan().nth(0)).toContainText("Puma");
    }

    async addPumaToCartandValidate(){
        await this.pumaProduct01CartBtn().click();
        await this.pumaProduct01CartPopupBtn().click();

        await this.cartLink().click();
        await expect(this.cartPumaProduct()).toContainText("Puma");
    }

}