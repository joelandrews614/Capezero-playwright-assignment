import {test as base} from "@playwright/test" 
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import ResultsPage from "./ResultsPage";

type PageFixtures = {
    homePage: HomePage;
    signInPage : SignInPage;
    resultsPage : ResultsPage;
}

export const test = base.extend({

    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },

    signInPage: async({page}, use) => {
        await use(new SignInPage(page));
    },

    resultsPage: async ({page}, use) => {
        await use(new ResultsPage(page));
    }

});