interface Account {
  RegisterNewAccount: string;
  Get: (id: number) => string;
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

interface Course {
  Create: string;
  GetDetails: (id: number) => string
}
export class ApiRoutes {
  static HostsApi: string =
    'https://localhost:44398/api';
  private static AccountController =
    ApiRoutes.HostsApi + '/account';
  static Account: Account = {
    RegisterNewAccount:
      ApiRoutes.AccountController + '/register',
    Get: (id: number): string => {
      return (
        ApiRoutes.AccountController + '/get/' + id
      );
    },
  };

  private static AuthenticateController =
    ApiRoutes.HostsApi + '/authenticate';
  static Authenticate: Authenticate = {
    LoginUser:
      ApiRoutes.AuthenticateController + '/login',
    LoginUserThrowGoogle:
      ApiRoutes.AuthenticateController +
      '/googlelogin',
  };

  private static FileController =
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

  private static CourseController =
    ApiRoutes.HostsApi + '/course';
  static Course: Course = {
    Create: ApiRoutes.CourseController + '/create',
    GetDetails: (id: number) => (ApiRoutes.CourseController + "/get/" + id)
  };
}
