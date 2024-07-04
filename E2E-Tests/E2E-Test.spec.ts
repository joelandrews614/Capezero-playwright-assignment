import {test} from "../Pages/Base.ts";

test.describe.serial("Amazon UI Functionality E2E Tests", () => {

  test.beforeEach(async ({homePage, page}) => {

    await homePage.navigateToHomePage();

  })

  test("E2E Test[1]: Login Successful with Valid Credientials", async ({homePage, signInPage}) => {
  
    let phoneNumber : string = "+919952575952";
    let password : string = "Test@612002";
  
    await homePage.clickStartSignInBtn();
  
    await signInPage.SignIn(phoneNumber, password);
  
    await homePage.validateAccountName();
  
  })
  
  test("E2E Test[2]: Search Bar Functionalitiy", async ({homePage}) => {
  
    let productName: string = "Shoe";
    
    await homePage.searchAndValidateProduct(productName);

  })

  test("E2E test[3]: Product Filter Functionality", async ({homePage, resultsPage, page}) => {
    
    await homePage.searchAndValidateProduct("Shoe");

    await page.waitForTimeout(10000);
    await resultsPage.clickPumaFilterLi();

    await resultsPage.validatePumaProductTitles();

  })

  test("E2E test[4]: Cart Functionality", async ({homePage, resultsPage, page}) => {

    await homePage.searchAndValidateProduct("Shoe");

    await page.waitForTimeout(10000);
    await resultsPage.clickPumaFilterLi();

    await page.waitForTimeout(10000);
    await resultsPage.addPumaToCartandValidate();

  })

})

