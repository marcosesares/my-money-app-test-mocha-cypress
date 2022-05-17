/// <reference types="cypress" />
import { CommonPageHelper } from "../../support/page-objects/common/common-page.helper";
import { LoginPageHelper } from "../../support/page-objects/login-page/login-page.helper";
import { CredentialsHelper } from "../../support/core/misc-utils/credentials-helper";

describe("My Money App", () => {
  const mcesar = CredentialsHelper.mcesar;
  context("Login", () => {
    before(() => {
      LoginPageHelper.open();
      CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    it("Open My Money App and login to application. - [TC001]", () => {
      LoginPageHelper.fillLoginFormAndClickLoginButton(mcesar);
      LoginPageHelper.verifyUserLoggedIn();
    });
  });
});
