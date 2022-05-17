import { CommonPage } from "./common.po";
import { CommonPageConstant } from "./common-page.constant";
import { ElementHelper } from "./../../core/helper/element-helper";
import { ExpectationHelper } from "../../core/helper/expectation-helper";

const {
  attributes: { labels },
} = CommonPageConstant;

export class CommonPageHelper {
  /**
   * Click the Register Menu Link
   */
  static clickRegisterMenuLink() {
    ElementHelper.actionClick(
      CommonPage.sideMenu.registerMenuLink,
      labels.registerMenuLink
    );
  }

  /**
   * Click the Dashboard Menu Link
   */
  static clickDashboardMenuLink() {
    ElementHelper.actionClick(
      CommonPage.sideMenu.dashboardMenuLink,
      labels.dashboardMenuLink
    );
  }

  /**
   * Click the Payment Cycles Menu Link
   */
  static clickPaymentCyclesMenuLink() {
    ElementHelper.actionClick(
      CommonPage.sideMenu.paymentCyclesMenuLink,
      labels.paymentCyclesMenuLink
    );
  }

  /**
   * Verify Register Menu Link is displayed.
   */
  static verifyRegisterMenuLinkDisplayedStatus() {
    ExpectationHelper.verifyElementDisplayedStatus(
      CommonPage.sideMenu.registerMenuLink,
      labels.registerMenuLink
    );
  }

  /**
   * Verify Payment Cycles Menu Link is displayed.
   */
  static verifyPaymentCyclesMenuLinkDisplayedStatus() {
    ExpectationHelper.verifyElementDisplayedStatus(
      CommonPage.sideMenu.paymentCyclesMenuLink,
      labels.paymentCyclesMenuLink
    );
  }

  /**
   * Verify Dashboard Menu Link is displayed.
   */
  static verifyDashboardMenuLinkDisplayedStatus() {
    ExpectationHelper.verifyElementDisplayedStatus(
      CommonPage.sideMenu.dashboardMenuLink,
      labels.dashboardMenuLink
    );
  }

  /**
   * Verify My Money App Dashboard page Header section label is displayed.
   */
  static verifyMyMoneyAppLogoDisplayedStatus() {
    ExpectationHelper.verifyElementDisplayedStatus(
      CommonPage.form.appLogo,
      labels.appLogo
    );
  }

  /**
   * Verify My Money App Dashboard page Header section label is displayed.
   */
  static verifyHeaderSectionLabelDisplayedStatus() {
    ExpectationHelper.verifyElementDisplayedStatus(
      CommonPage.form.headerSectionLabel,
      labels.headerSectionLabel
    );
  }

  /**
   * Verify My Money App Dashboard page Header section label has text.
   */
  static verifyHeaderSectionHasText(text) {
    ExpectationHelper.verifyElementTextEqualTo(
      CommonPage.form.headerSectionLabel,
      text,
      text
    );
  }

  /**
   * Verify Logged in User label is displayed.
   */
  static verifyUserNameLabelDisplayedStatus() {
    ExpectationHelper.verifyElementDisplayedStatus(
      CommonPage.form.userNameLabel,
      labels.userNameLabel
    );
  }
}
