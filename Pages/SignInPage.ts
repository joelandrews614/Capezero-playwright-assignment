import {Page, expect} from "@playwright/test"

export default class SignInPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Locators:
    emailOrPhoneTxt = () => this.page.locator("//input[@name='email']");
    continueBtn = () => this.page.locator("//span[@id='continue']");
    validateUsernameTxt = () => this.page.locator("//span[@id='auth-email-claim']");
    passwordTxt = () => this.page.locator("//input[@id='ap_password']");
    endSignInBtn = () => this.page.locator("//input[@id='signInSubmit']");

    // Actions:
    async SignIn(username: string, password: string){
        await this.emailOrPhoneTxt().fill(username);
        await this.continueBtn().click();
        await expect(this.validateUsernameTxt()).toHaveText(username);
        await this.passwordTxt().fill(password);
        await this.endSignInBtn().click(); 
    }
}