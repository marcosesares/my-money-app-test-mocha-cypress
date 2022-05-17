import { ExpectationHelper } from "./expectation-helper";
import { ValidationsHelper } from "./validations-helper";

export class ElementHelper {
  static scrollIntoView(targetElement, elementName) {
    let message = ValidationsHelper.getScrollAction(elementName);
    targetElement.scrollIntoView({ message });
  }

  static actionClick(targetElement, elementName) {
    let message = ValidationsHelper.getClickAction(elementName);
    targetElement.click({ message });
  }

  static setValue(targetElement, elementName, text) {
    let message = ValidationsHelper.getSetValueAction(elementName, text);
    targetElement.type(text, { message });
  }

  static setPasswordValue(targetElement, elementName, text) {
    let message = ValidationsHelper.getSetPasswordValueAction(elementName);
    targetElement.type(text, { sensitive: true, message });
  }
}
