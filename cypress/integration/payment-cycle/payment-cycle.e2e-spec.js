/// <reference types="cypress" />
import { CredentialsHelper } from "../../support/core/misc-utils/credentials-helper";
import { CommonPageHelper } from "../../support/page-objects/common/common-page.helper";
import { LoginPageHelper } from "../../support/page-objects/login-page/login-page.helper";
import PaymentCycleHelper from "../../support/page-objects/payment-cycle-page/payment-cycle-page.helper";

describe("My Money App", () => {
  const mcesar = CredentialsHelper.mcesar;
  let paymentCycle;
  context("Payment Cycle", () => {
    before(() => {
      LoginPageHelper.open();
      CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
    });

    beforeEach(() => {
      cy.createPaymentCycle();
      cy.fixture("paymentCycle").then((payload) => {
        paymentCycle = payload;
      });
      LoginPageHelper.fillLoginFormAndClickLoginButton(mcesar);
      LoginPageHelper.verifyUserLoggedIn();
    });

    it("Add a Payment Cycle. - [TC004]", () => {
      PaymentCycleHelper.navigateToPaymentCyclesPage();
      PaymentCycleHelper.verifyPaymentCycleSectionLabel();

      PaymentCycleHelper.clickAddButton();
      PaymentCycleHelper.verifyAddPaymentCycleFormDisplayed();

      PaymentCycleHelper.fillPaymentCycleFormAndClickSaveButton(paymentCycle);
      PaymentCycleHelper.verifyPaymentCycleDisplayed(paymentCycle);
    });
  });
});
