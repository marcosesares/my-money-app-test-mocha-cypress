import { SignUpPageConstant } from "./signup-page.constants";

const {
  attributes: { selectors, labels },
} = SignUpPageConstant;

export class SignUpPage {
  static get form() {
    return {
      get confirmPassword() {
        return cy.get(selectors.confirmPassword);
      },
      get register() {
        return cy.get(selectors.register);
      },
      get signUpLink() {
        return cy.get(selectors.signUpLink);
      },
      get name() {
        return cy.get(selectors.name);
      },
    };
  }
}
