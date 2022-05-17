import BasePage from "../base-page.po";
import { PaymentCyclePageConstant } from "./payment-cycle-page.constants";

const {
  attributes: { selectors, labels },
} = PaymentCyclePageConstant;

class PaymentCyclePage extends BasePage {
  get paymentCycleHeader() {
    return labels.paymentCycleHeader;
  }
  get list() {
    return cy.get(selectors.list);
  }
  get add() {
    return cy.get(selectors.add);
  }
  get nameColumn() {
    return cy.get(selectors.nameColumn);
  }
  get monthColumn() {
    return cy.get(selectors.monthColumn);
  }
  get yearColumn() {
    return cy.get(selectors.yearColumn);
  }
  get actionsColumn() {
    return cy.get(selectors.actionsColumn);
  }
  get nameTextbox() {
    return cy.get(selectors.nameTextbox);
  }
  get monthTextbox() {
    return cy.get(selectors.monthTextbox);
  }
  get yearTextbox() {
    return cy.get(selectors.yearTextbox);
  }
  get save() {
    return cy.get(selectors.save);
  }
  get cancel() {
    return cy.get(selectors.cancel);
  }

  getListTableCell(rowValue, value) {
    return cy.get(`tr:has(td:contains("${rowValue}")) td`).each((el, index) => {
      let text = el.text();
      if (text === value) {
        return cy.get(`tr:has(td:contains("${rowValue}")) td`).eq(index);
      }
    });
  }

  getCreditValueTextbox(row) {
    return cy.get(`input[name='credits[${row}].value']`);
  }

  getCreditNameTextbox(row) {
    return cy.get(`input[name='credits[${row}].name']`);
  }

  getDebitValueTextbox(row) {
    return cy.get(`input[name='debts[${row}].value']`);
  }

  getDebitNameTextbox(row) {
    return cy.get(`input[name='debts[${row}].name']`);
  }

  getDebitStatusTextbox(row) {
    return cy.get(`input[name='debts[${row}].status']`);
  }
}

export default new PaymentCyclePage();
