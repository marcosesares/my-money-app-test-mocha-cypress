import { ExpectationHelper } from "../../core/helper/expectation-helper";
import { EndpointHelper } from "../../core/misc-utils/endpoint-helper";
import { ElementHelper } from "../../core/helper/element-helper";
import BasePageHelper from "../base-page.helper";
import { CommonPageHelper } from "../common/common-page.helper";
import { DashboardPageConstant } from "./dashboard-page.constants";
import DashboardPage from "./dashboard-page.po";
import { CommonPage } from "../common/common.po";
import { CommonPageConstant } from "../common/common-page.constant";

const {
  attributes: { labels },
} = DashboardPageConstant;

export class DashboardPageHelper extends BasePageHelper {
  static verifyDashboardSectionDisplayedStatus() {
    CommonPageHelper.verifyHeaderSectionLabelDisplayedStatus();
  }

  static verifyUserNameLabelDisplayedStatus() {
    CommonPageHelper.verifyUserNameLabelDisplayedStatus();
  }

  static clickTheDashboardMenuLink() {
    ElementHelper.actionClick(
      CommonPage.sideMenu.dashboardMenuLink,
      CommonPageConstant.attributes.labels.dashboardMenuLink
    );
  }

  static verifyDashboardLabels() {
    this.verifyTotalCreditsLabelText();
    this.verifyTotalDebitsLabelText();
    this.verifyConsolidatedLabelText();
    this.verifyConsolidatedValue();
  }

  static verifyTotalCreditsLabelText() {
    ExpectationHelper.verifyElementDisplayedStatus(
      DashboardPage.totalCredits,
      labels.totalCredits
    );
    ExpectationHelper.verifyElementTextEqualTo(
      DashboardPage.totalCredits,
      labels.totalCredits,
      labels.totalCredits
    );
  }

  static verifyTotalDebitsLabelText() {
    ExpectationHelper.verifyElementDisplayedStatus(
      DashboardPage.totalDebits,
      labels.totalDebits
    );
    ExpectationHelper.verifyElementTextEqualTo(
      DashboardPage.totalDebits,
      labels.totalDebits,
      labels.totalDebits
    );
  }

  static verifyConsolidatedLabelText() {
    ExpectationHelper.verifyElementDisplayedStatus(
      DashboardPage.consolidated,
      labels.consolidated
    );
    ExpectationHelper.verifyElementTextEqualTo(
      DashboardPage.consolidated,
      labels.consolidated,
      labels.consolidated
    );
  }

  static verifyConsolidatedValue() {
    DashboardPage.totalCreditsValue.then((credit) => {
      const credits = +credit.text().slice(1);
      DashboardPage.totalDebitsValue.then((debit) => {
        const debits = +debit.text().slice(1);
        const total = credits - debits;
        ExpectationHelper.verifyElementTextEqualTo(
          DashboardPage.consolidatedValue,
          labels.consolidatedValue,
          `$${total}`
        );
      });
    });
  }

  url() {
    return EndpointHelper.homePage;
  }
}
