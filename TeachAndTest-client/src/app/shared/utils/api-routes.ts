interface Account {
  RegisterNewAccount: string;
}

interface Authenticate {
  LoginUser: string;
}

export class ApiRoutes {
  static HostsApi: string = 'https://localhost:44398/api';
  static AccountController = ApiRoutes.HostsApi + "/account";
  static Account: Account =  {
    RegisterNewAccount: ApiRoutes.AccountController + "/register"
  }

  static AuthenticateController = ApiRoutes.HostsApi + "/authenticate";
  static Authenticate: Authenticate =  {
    LoginUser: ApiRoutes.AuthenticateController + "/login"
  }
}
