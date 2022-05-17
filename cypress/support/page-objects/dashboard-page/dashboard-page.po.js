import { DashboardPageConstant } from "./dashboard-page.constants";

const {
  attributes: { selectors },
} = DashboardPageConstant;

class DashboardPage {
  get totalCreditsValue() {
    return cy.get(selectors.totalCreditsValue);
  }
  get totalDebitsValue() {
    return cy.get(selectors.totalDebitsValue);
  }
  get consolidatedValue() {
    return cy.get(selectors.consolidatedValue);
  }
  get totalCredits() {
    return cy.get(selectors.totalCredits);
  }
  get totalDebits() {
    return cy.get(selectors.totalDebits);
  }
  get consolidated() {
    return cy.get(selectors.consolidated);
  }
}

export default new DashboardPage();
