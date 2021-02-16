using Microsoft.IdentityModel.Tokens;
using System.Text;


namespace TeachAndTest.Api.Common.JWT
{
    public class JwtAuthOptions
    {
        public const string SectionName = "JwtAuthOptions";
        public static string ISSUER = "Default";
        public static string AUDIENCE = "Default";
        public static string KEY = "Default";
        public static int LIFETIME = 30;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
