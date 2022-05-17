import { CommonPageConstant } from "./common-page.constant";
import { HtmlHelper } from "./../../core/misc-utils/html-helper";

const {
  attributes: { selectors, labels },
} = CommonPageConstant;

export class CommonPage {
  static get sideMenu() {
    return {
      get dashboardMenuLink() {
        return cy.get(selectors.dashboardMenuLink).parents(HtmlHelper.tags.a);
      },
      get registerMenuLink() {
        return cy.get(selectors.registerMenuLink).parents(HtmlHelper.tags.a);
      },
      get paymentCyclesMenuLink() {
        return cy
          .get(selectors.paymentCyclesMenuLink)
          .parents(HtmlHelper.tags.a);
      },
    };
  }

  static get form() {
    return {
      get headerSectionLabel() {
        return cy.get(selectors.headerSectionLabel);
      },
      get userNameLabel() {
        return cy.get(selectors.userNameLabel);
      },
      get appLogo() {
        return cy.get(selectors.appLogo);
      },
    };
  }

  static getElementByPlaceHolder(value, name) {
    return cy.get(`[${HtmlHelper.attributes.placeholder}='${value}']`);
  }

  static getElementByIdEndsWith(idValue, name) {
    return cy.get(`[${HtmlHelper.attributes.id}$='${idValue}']`);
  }

  static getElementByIdContains(idValue, name) {
    return cy.get(`[${HtmlHelper.attributes.id}*='${idValue}']`);
  }

  static getElementByIdStartsWith(idValue, name) {
    return cy.get(`[${HtmlHelper.attributes.id}^='${idValue}']`);
  }

  static getElementByNameStartsWith(nameValue, name) {
    return cy.get(`[${HtmlHelper.attributes.name}^='${nameValue}']`);
  }

  static getElementByNameContains(nameValue, name) {
    return cy.get(`[${HtmlHelper.attributes.name}*='${nameValue}']`);
  }

  static getElementByNameEndsWith(nameValue, name) {
    return cy.get(`[${HtmlHelper.attributes.name}$='${nameValue}']`);
  }

  static getElementByClassContains(className, name) {
    return cy.get(`[${HtmlHelper.attributes.class}*='${className}']`);
  }

  static getElementByClassEndsWith(className, name) {
    return cy.get(`[${HtmlHelper.attributes.class}$='${className}']`);
  }

  static getElementByClassStartsWith(className, name) {
    return cy.get(`[${HtmlHelper.attributes.class}^='${className}']`);
  }
}
