import BasePageHelper from "../base-page.helper";
import { SignUpPage } from "./signup-page.po";
import { LoginPageHelper } from "../login-page/login-page.helper";
import { EndpointHelper } from "../../core/misc-utils/endpoint-helper";
import { ElementHelper } from "../../core/helper/element-helper";
import { SignUpPageConstant } from "./signup-page.constants";

const {
  attributes: { labels },
} = SignUpPageConstant;

export class SignUpPageHelper extends BasePageHelper {
  /**
   * Enter Name, Email, Password, ConfirmPassword and click 'Register' button.
   * @param user
   */
  static fillSignUpFormAndClickRegisterButton(user) {
    this.fillSignUpForm(user);
    SignUpPageHelper.clickTheRegisterButton();
  }

  static clickTheRegisterButton() {
    ElementHelper.actionClick(SignUpPage.form.register, labels.register);
  }

  /**
   * Enter Name, Email, Password, ConfirmPassword.
   * @param user
   */
  static fillSignUpForm(user) {
    SignUpPageHelper.clickTheRegisterHereLink();
    LoginPageHelper.fillLoginForm(user);
    SignUpPageHelper.setTheUserName(user);
    SignUpPageHelper.setTheConfirmationPassword(user);
  }

  static setTheConfirmationPassword(user) {
    ElementHelper.setValue(
      SignUpPage.form.confirmPassword,
      labels.confirmPassword,
      user.password
    );
  }

  static setTheUserName(user) {
    ElementHelper.setValue(SignUpPage.form.name, labels.name, user.name);
  }

  static clickTheRegisterHereLink() {
    ElementHelper.actionClick(SignUpPage.form.signUpLink, labels.signUpLink);
  }

  url() {
    return EndpointHelper.homePage;
  }
}
