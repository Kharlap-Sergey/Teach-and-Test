interface Account {
  RegisterPage: string;
  LoginPage: string;
}

export class Routes {
  static AccountPath = "/account";
  static Account: Account =  {
    RegisterPage: Routes.AccountPath + "/register",
    LoginPage: Routes.AccountPath + "/login"
  }
}
