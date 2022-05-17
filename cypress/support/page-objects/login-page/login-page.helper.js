import BasePageHelper from "../base-page.helper";
import { EndpointHelper } from "../../core/misc-utils/endpoint-helper";
import { CommonPageHelper } from "../common/common-page.helper";
import { ElementHelper } from "../../core/helper/element-helper";
import { LoginPageConstant } from "./login-page.constants";
import LoginPage from "./login-page.po";

const {
  attributes: { labels },
} = LoginPageConstant;

export class LoginPageHelper extends BasePageHelper {
  /**
   * Enter Email, Password and click 'LogIn' button
   * @param user
   */
  static fillLoginFormAndClickLoginButton(user) {
    this.fillLoginForm(user);
    this.clickLoginButton();
  }

  /**
   * Click the 'LogIn' button
   */
  static clickLoginButton() {
    ElementHelper.actionClick(LoginPage.logIn, labels.logIn);
  }

  /**
   * Enter Email, Password
   * @param user
   */
  static fillLoginForm(user) {
    this.setEmail(user);
    this.setPassword(user);
  }

  /**
   * Verify My Money App Header section is displayed.
   */
  static verifyHeaderSectionLabelDisplayedStatus() {
    CommonPageHelper.verifyHeaderSectionLabelDisplayedStatus();
  }

  /**
   * Verify My Money App logo is displayed.
   */
  static verifyMyMoneyAppLogoDisplayedStatus() {
    CommonPageHelper.verifyMyMoneyAppLogoDisplayedStatus();
  }

  /**
   * Verify User is able to login.
   */
  static verifyUserLoggedIn() {
    this.verifyMyMoneyAppLogoDisplayedStatus();
    this.verifyHeaderSectionLabelDisplayedStatus();
  }

  /**
   * Enter Email
   * @param user
   */
  static setEmail(user) {
    ElementHelper.setValue(LoginPage.email, labels.email, user.email);
  }

  /**
   * Enter Password
   * @param user
   */
  static setPassword(user) {
    ElementHelper.setPasswordValue(
      LoginPage.password,
      labels.password,
      user.password
    );
  }

  static open() {
    super.open(this.url());
  }

  static url() {
    return EndpointHelper.loginPage;
  }
}
