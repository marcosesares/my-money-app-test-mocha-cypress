/// <reference types="cypress" />
import { CredentialsHelper } from "../../support/core/misc-utils/credentials-helper";
import { CommonPageHelper } from "../../support/page-objects/common/common-page.helper";
import { DashboardPageHelper } from "../../support/page-objects/dashboard-page/dashboard-page.helper";
import { LoginPageHelper } from "../../support/page-objects/login-page/login-page.helper";

describe("My Money App", () => {
  const mcesar = CredentialsHelper.mcesar;

  context("Dashboard", () => {
    before(() => {
      LoginPageHelper.open();
      CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    beforeEach(() => {
      LoginPageHelper.fillLoginFormAndClickLoginButton(mcesar);
      LoginPageHelper.verifyUserLoggedIn();
    });

    it("Dashboard Consolidated value check. - [TC003]", () => {
      DashboardPageHelper.clickTheDashboardMenuLink();
      DashboardPageHelper.verifyDashboardLabels();
    });
  });
});
