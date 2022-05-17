export class CredentialsHelper {
  static users = Cypress.env("users");
  static mcesar = {
    name: CredentialsHelper.users.mcesar.name,
    email: CredentialsHelper.users.mcesar.email,
    password: CredentialsHelper.users.mcesar.password,
  };
}
