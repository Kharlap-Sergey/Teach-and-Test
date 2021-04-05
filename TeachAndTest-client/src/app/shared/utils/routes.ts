type Account = {
  RegisterPage: string;
  LoginPage: string;
  ProfilePage: Function;
}

type Course = {
  Catalog: string;
  Teach: string;
}

export class Routes {
  private static AccountPath = "/account";
  static Account: Account =  {
    RegisterPage: Routes.AccountPath + "/registration",
    LoginPage: Routes.AccountPath + "/login",
    ProfilePage: (profileId: number) => `${Routes.AccountPath}/profile/${profileId}`
  }

  private static CoursePath = "/course"
  static Course: Course = {
    Catalog: Routes.CoursePath + "/catalog",
    Teach: Routes.CoursePath + "/teach"
  }
}
