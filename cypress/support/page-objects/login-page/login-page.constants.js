export class LoginPageConstant {
  static attributes = {
    selectors: {
      email: "input[placeholder='Email']",
      password: "input[placeholder='Password']",
      logIn: "button:contains('Login')",
      loginLink: "button:contains('Already registered? Login here!')",
      loginBoxMsg: ".login-box-msg",
    },
    labels: {
      email: "User email Textbox",
      password: "User password Textbox",
      logIn: "Login Button",
      loginLink: "Already registered? Login here! Link",
      loginBoxMsg: "Page Header Label",
    },
  };

  static errorMessages = {
    incorrectLoginPassword: "Invalid User/Password",
  };
}
