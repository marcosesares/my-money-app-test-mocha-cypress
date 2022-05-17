/// <reference types="cypress" />
import faker from "@faker-js/faker";
import { CommonPageHelper } from "../../support/page-objects/common/common-page.helper";
import { LoginPageHelper } from "../../support/page-objects/login-page/login-page.helper";
import { SignUpPageHelper } from "./../../support/page-objects/signup-page/signup-page.helper";
import { DashboardPageHelper } from "./../../support/page-objects/dashboard-page/dashboard-page.helper";
import { CoreConstants } from "../../support/core/core-constants";

describe("My Money App", () => {
  context("Signup", () => {
    before(() => {
      LoginPageHelper.open();
      CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    it("User Open My Money App and Sign up to application. - [TC002]", () => {
      let user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: `${faker.helpers.replaceSymbols(
          CoreConstants.PASSWORD_REGEX
        )}`,
      };
      SignUpPageHelper.fillSignUpFormAndClickRegisterButton(user);
      DashboardPageHelper.verifyDashboardSectionDisplayedStatus();
    });
  });
});
