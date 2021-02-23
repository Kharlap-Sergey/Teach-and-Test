interface Account {
  RegisterNewAccount: string;
}

export class ApiRoutes {
  static HostsApi: string = 'https://localhost:44398/api';
  static AccountController = ApiRoutes.HostsApi + "/account";
  static Account: Account =  {
    RegisterNewAccount: ApiRoutes.AccountController + "/register"
  }
}
