import BasePage from "../base-page.po";
import { LoginPageConstant } from "./login-page.constants";

const {
  attributes: { selectors, labels },
} = LoginPageConstant;

class LoginPage extends BasePage {
  constructor() {
    super();
  }
  get loginBoxMsg() {
    return cy.get(selectors.loginBoxMsg);
  }
  get email() {
    return cy.get(selectors.email);
  }
  get password() {
    return cy.get(selectors.password);
  }
  get logIn() {
    return cy.get(selectors.logIn);
  }
  get loginLink() {
    return cy.get(selectors.loginLink);
  }
}

export default new LoginPage();
