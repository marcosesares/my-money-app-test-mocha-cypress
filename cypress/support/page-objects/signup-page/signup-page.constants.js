export class SignUpPageConstant {
  static attributes = {
    selectors: {
      confirmPassword: "input[placeholder='Confirm Password']",
      register: "button:contains('Register')",
      signUpLink: "button:contains('New User? Register here!')",
      name: "input[placeholder='Name']",
    },
    labels: {
      confirmPassword: "Confirm Password Textfield",
      register: "Register Button",
      signUpLink: "New User? Register here! Link",
      name: "Name Textfield",
    },
  };
}
