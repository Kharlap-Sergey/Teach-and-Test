using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace TeachAndTest.Api.Common.JWT
{
    public class CustomJwtCreator
    {
        public static string CreateJwt(int personId)
        {
            return CreateJwt(GetIdentity(personId));
        }
        public static string CreateJwt(ClaimsIdentity identity)
        {
            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                    issuer: JwtAuthOptions.ISSUER,
                    audience: JwtAuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(JwtAuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(
                        JwtAuthOptions.GetSymmetricSecurityKey(),
                        SecurityAlgorithms.HmacSha256));

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
        public static ClaimsIdentity GetIdentity(int person)
        {
            var claims = new List<Claim>
                {
                    new Claim(
                        ClaimsIdentity.DefaultNameClaimType,
                        person.ToString()),
                };

            ClaimsIdentity claimsIdentity =
            new ClaimsIdentity(
                claims,
                "Token",
                ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
    }
}
