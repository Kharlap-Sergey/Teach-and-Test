interface Account {
  RegisterNewAccount: string;
}

interface Authenticate {
  LoginUser: string;
  LoginUserThrowGoogle: string;
}

interface File {
  Upload: string;
  Download: (id: string) => string;
  DownloadImage: (id: string) => string;
}

export class ApiRoutes {
  static HostsApi: string =
    'https://localhost:44398/api';
  static AccountController =
    ApiRoutes.HostsApi + '/account';
  static Account: Account = {
    RegisterNewAccount:
      ApiRoutes.AccountController + '/register',
    Get:
      ApiRoutes.AccountController +
  };

  static AuthenticateController =
    ApiRoutes.HostsApi + '/authenticate';
  static Authenticate: Authenticate = {
    LoginUser:
      ApiRoutes.AuthenticateController + '/login',
    LoginUserThrowGoogle:
      ApiRoutes.AuthenticateController +
      '/googlelogin',
  };

  static FileController =
    ApiRoutes.HostsApi + '/files';
  static File: File = {
    Upload: ApiRoutes.FileController + '/upload',
    Download: (id: string): string => {
      return (
        ApiRoutes.FileController + '/download/' + id
      );
    },
    DownloadImage: (id: string): string => {
      return (
        ApiRoutes.FileController +
        '/downloadImage/' +
        id
      );
    },
  };
}
