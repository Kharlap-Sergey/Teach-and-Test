type Account = {
  RegisterPage: string;
  LoginPage: string;
  ProfilePage: Function;
}

type Course = {
  Base: string;
  ForStudents: string;
  ForTeachers: string;
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
    Base: Routes.CoursePath + "",
    ForStudents: Routes.CoursePath + "/for/students",
    ForTeachers: Routes.CoursePath + "/for/teachers"
  }
}
