import { CommonPage } from "../common/common.po";
import { CommonPageHelper } from "../common/common-page.helper";
import { ElementHelper } from "../../core/helper/element-helper";
import PaymentCyclePage from "./payment-cycle-page.po";
import { PaymentCyclePageConstant } from "./payment-cycle-page.constants";
import BasePageHelper from "../base-page.helper";
import { EndpointHelper } from "../../core/misc-utils/endpoint-helper";
import { CommonPageConstant } from "../common/common-page.constant";
import { ExpectationHelper } from "../../core/helper/expectation-helper";

const {
  attributes: { labels },
} = PaymentCyclePageConstant;

class PaymentCycleHelper extends BasePageHelper {
  /**
   * Navigate to PaymentCycles page
   */
  navigateToPaymentCyclesPage() {
    this.clickTheRegisterMenuLink();
    this.clickThePaymentCyclesMenuLink();
  }

  /**
   * Click the PaymentCycles menu link
   */
  clickThePaymentCyclesMenuLink() {
    ElementHelper.actionClick(
      CommonPage.sideMenu.paymentCyclesMenuLink,
      CommonPageConstant.attributes.labels.paymentCyclesMenuLink
    );
  }

  /**
   * Click the Register menu link
   */
  clickTheRegisterMenuLink() {
    ElementHelper.actionClick(
      CommonPage.sideMenu.registerMenuLink,
      CommonPageConstant.attributes.labels.registerMenuLink
    );
  }

  /**
   * Verify the PaymentCycles header
   */
  verifyPaymentCycleSectionLabel() {
    CommonPageHelper.verifyHeaderSectionLabelDisplayedStatus();
    CommonPageHelper.verifyHeaderSectionHasText(
      PaymentCyclePage.paymentCycleHeader
    );
  }

  /**
   * Click the Register Button
   */
  clickAddButton() {
    ElementHelper.actionClick(PaymentCyclePage.add, labels.add);
  }

  /**
   * Verify the created PaymentCycle
   */
  verifyPaymentCycleDisplayed(paymentCycle) {
    this.verifyPaymentCycleSectionLabel();
    let name = `${paymentCycle.name}`;
    ExpectationHelper.verifyElementTextEqualTo(
      PaymentCyclePage.getListTableCell(name, name),
      `Name cell under Name column`,
      name
    );
    let month = `${paymentCycle.month}`;
    ExpectationHelper.verifyElementTextEqualTo(
      PaymentCyclePage.getListTableCell(name, month),
      `Month cell under Month column`,
      month
    );
    let year = `${paymentCycle.year}`;
    ExpectationHelper.verifyElementTextEqualTo(
      PaymentCyclePage.getListTableCell(name, year),
      `Year cell under Year column`,
      year
    );
  }

  /**
   * Verify the add PaymentCycle form name, month and year textboxes are displayed
   */
  verifyAddPaymentCycleFormDisplayed() {
    ExpectationHelper.verifyElementDisplayedStatus(
      PaymentCyclePage.nameTextbox,
      labels.nameTextbox
    );
    ExpectationHelper.verifyElementDisplayedStatus(
      PaymentCyclePage.monthTextbox,
      labels.monthTextbox
    );
    ExpectationHelper.verifyElementDisplayedStatus(
      PaymentCyclePage.yearTextbox,
      labels.yearTextbox
    );
  }

  /**
   * fill the add PaymentCycle form with name, month, year, credit, and debit info and click the Save button
   */
  fillPaymentCycleFormAndClickSaveButton(paymentCycle) {
    this.fillPaymentCycleForm(paymentCycle);
    this.clickSaveButton();
  }

  /**
   * Click the Save button
   */
  clickSaveButton() {
    ElementHelper.scrollIntoView(PaymentCyclePage.save, labels.save);
    ElementHelper.actionClick(PaymentCyclePage.save, labels.save);
  }

  /**
   * fill the add PaymentCycle form with name, month, year, credit, and debit info
   */
  fillPaymentCycleForm(paymentCycle) {
    ElementHelper.setValue(
      PaymentCyclePage.nameTextbox,
      labels.nameTextbox,
      paymentCycle.name
    );
    ElementHelper.setValue(
      PaymentCyclePage.monthTextbox,
      labels.monthTextbox,
      `${paymentCycle.month}`
    );
    ElementHelper.setValue(
      PaymentCyclePage.yearTextbox,
      labels.yearTextbox,
      `${paymentCycle.year}`
    );
    this.addPaymentCredit(paymentCycle);
    this.addPaymentDebit(paymentCycle);
  }

  /**
   * fill the add PaymentCycle form with credit info
   */
  addPaymentCredit(paymentCycle) {
    for (let i = 0; i < paymentCycle.credits.length; i++) {
      let credit = paymentCycle.credits[i];
      ElementHelper.setValue(
        PaymentCyclePage.getCreditNameTextbox(i),
        `Credit Name Textbox for row index: ${i}`,
        credit.name
      );
      ElementHelper.setValue(
        PaymentCyclePage.getCreditValueTextbox(i),
        `Credit Value Textbox for row index: ${i}`,
        credit.value
      );
      if (i + 1 < paymentCycle.credits.length) {
        ElementHelper.actionClick(
          PaymentCyclePage.getCreditAddButton(i),
          `Credit Add Button for row index: ${i}`
        );
      }
    }
  }

  /**
   * fill the add PaymentCycle form with debit info
   */
  addPaymentDebit(paymentCycle) {
    for (let i = 0; i < paymentCycle.debits.length; i++) {
      let debit = paymentCycle.debits[i];
      ElementHelper.setValue(
        PaymentCyclePage.getDebitNameTextbox(i),
        `Debit Name Textbox for row index: ${i}`,
        debit.name
      );
      ElementHelper.setValue(
        PaymentCyclePage.getDebitValueTextbox(i),
        `Debit Value Textbox for row index: ${i}`,
        debit.value
      );
      ElementHelper.setValue(
        PaymentCyclePage.getDebitStatusTextbox(i),
        `Debit Status Textbox for row index: ${i}`,
        debit.status
      );
      if (i + 1 < paymentCycle.debits.length) {
        ElementHelper.actionClick(
          PaymentCyclePage.getDebitAddButton(i),
          `Debit Add Button for row index: ${i}`
        );
      }
    }
  }

  url() {
    return EndpointHelper.homePage;
  }
}

export default new PaymentCycleHelper();
