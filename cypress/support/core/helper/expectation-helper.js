import { ValidationsHelper } from "./validations-helper";

export class ExpectationHelper {
  static verifyElementTextEqualTo(targetElement, elementName, expectedValue) {
    const message = ValidationsHelper.getFieldTextEqualsToValidation(
      elementName,
      expectedValue
    );
    targetElement.should("have.text", expectedValue, { message });
  }

  static verifyElementDisplayedStatus(targetElement, elementName) {
    const message = ValidationsHelper.getDisplayedValidation(elementName);
    targetElement.should("be.visible", null, { message });
  }
}
