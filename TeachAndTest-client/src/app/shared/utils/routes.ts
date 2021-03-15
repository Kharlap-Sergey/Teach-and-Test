interface Account {
  RegisterPage: string;
  LoginPage: string;
  ProfilePage: Function;
}

export class Routes {
  static AccountPath = "/account";
  static Account: Account =  {
    RegisterPage: Routes.AccountPath + "/registration",
    LoginPage: Routes.AccountPath + "/login",
    ProfilePage: (profileId: number) => `${Routes.AccountPath}/profile/${profileId}`
  }
}
