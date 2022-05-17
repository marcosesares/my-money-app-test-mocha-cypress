export default class BasePageHelper {
  constructor() {}

  static open(path) {
    cy.visit(`/${path}`);
  }
}
