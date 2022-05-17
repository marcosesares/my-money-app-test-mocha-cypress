/// <reference types="cypress" />
import faker from "@faker-js/faker";
import { CoreConstants } from "./core/core-constants";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const { INITIAL_DATE, END_DATE } = CoreConstants;

Cypress.Commands.add("createPaymentCycle", () => {
  let nameExt = new Date().toISOString().split("T").join().split(".")[0];
  const date = faker.date.between(INITIAL_DATE, END_DATE);
  const credits = [
    { name: faker.name.findName(), value: String(faker.random.numeric(3)) },
  ];
  let debits = [
    {
      name: faker.name.findName(),
      value: String(faker.random.numeric(3)),
      status: "AGENDADO",
    },
  ];
  cy.writeFile("cypress/fixtures/paymentCycle.json", {
    name: `${faker.name.findName()} ${nameExt}`,
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    credits,
    debits,
  });
});

Cypress.Commands.overwrite(
  "should",
  (originalFn, element, text, expectedValue, options) => {
    if (options && !options.logged) {
      options.log = false;
      const log = Cypress.log({
        $el: element,
        name: "Sub-Verification",
        message: options.message ? options.message : text,
      });
      options.logged = true;
      log.end();
    }
    return originalFn(element, text, expectedValue, options);
  }
);

Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  Cypress.log({
    name: "Sub-Step",
    message: `Opening page ${Cypress.config().baseUrl}${url}`,
  });
  return originalFn(url, options);
});

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false;
  }
  if (options) {
    Cypress.log({
      $el: element,
      name: "Sub-Step",
      message: options.message ? options.message : text,
    });
  }
  return originalFn(element, text, options);
});

Cypress.Commands.overwrite("click", (originalFn, subject, options) => {
  if (options && options.message) {
    Cypress.log({
      $el: subject,
      name: "Sub-Step",
      message: options.message,
    });
    options = undefined;
  }
  return originalFn(subject, options);
});

Cypress.Commands.overwrite("scrollIntoView", (originalFn, subject, options) => {
  if (options && options.message) {
    Cypress.log({
      $el: subject,
      name: "Sub-Step",
      message: options.message,
    });
    options = undefined;
  }
  return originalFn(subject, options);
});
