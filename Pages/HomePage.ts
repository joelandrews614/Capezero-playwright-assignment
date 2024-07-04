import {Page, expect} from "@playwright/test"

export default class HomePage{

    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Locators:
    startSignInBtn = () => this.page.getByText("Hello, sign in")
    validateAccountNameSpan = () => this.page.locator("//span[@id='nav-link-accountList-nav-line-1']");    
    searchBarInput = () => this.page.locator("//input[@id='twotabsearchtextbox']");
    searchBarBtn = () => this.page.locator("//input[@id='nav-search-submit-button']");
    productsList = () => this.page.locator("//span[@class='a-size-base-plus a-color-base a-text-normal']");

    // Actions:
    async navigateToHomePage(){
        await this.page.goto("https://www.amazon.in/");
    }

    async clickStartSignInBtn(){
        await this.startSignInBtn().click()
    }

    async validateAccountName(){
        await expect(this.validateAccountNameSpan()).toBeVisible();
    }

    async searchAndValidateProduct(productName: string){
        await this.searchBarInput().fill(productName);
        await this.searchBarBtn().click();

        await expect(this.searchBarInput()).toHaveValue(productName);
        
        await expect(this.productsList().nth(0)).toContainText(productName);
    }

}