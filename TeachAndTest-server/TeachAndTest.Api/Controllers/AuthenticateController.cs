using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.JWT;
using TeachAndTest.Api.Common.ViewModel;
using TeachAndTest.BusinessLogic.Auth;

namespace TeachAndTest.Api.Controllers
{
    public class AuthenticateController : ApiControllerBase
    {
        private readonly IAuthenticateService authenticateService;

        public AuthenticateController(IAuthenticateService authenticateService)
        {
            this.authenticateService = authenticateService;
        }


        [HttpPost]
        public async Task<ActionResult<object>> Login([FromBody] LoginRequestVM loginRequest)
        {
            var user = await authenticateService.LoginAsync(loginRequest.Login, loginRequest.Password);
            var authJwtToken = CustomJwtCreator.CreateJwt(user.Id);

            return new
            {
                user,
                token = authJwtToken
            };
        }

        [HttpPost]
        public async Task<ActionResult<object>> GoogleLogin([FromBody] LoginGoogleRequestVM request)
        {
            GoogleJsonWebSignature.Payload payload;
            try
            {
                payload = await GoogleJsonWebSignature.ValidateAsync(
                    request.GoogleJwtToken,
                    new GoogleJsonWebSignature.ValidationSettings {
                        Audience = new[] { 
                            "664462309144-e1b6fgtcboicec22a1lo2bc8k76f1mh1.apps.googleusercontent.com" 
                        }
                    }
                    );
            }catch(Exception e){
                throw;
            }


            var user = await authenticateService.GetOrCreateExternalLoginUser("google", payload.Subject, payload.Email, payload.GivenName, payload.FamilyName);
            var token = CustomJwtCreator.CreateJwt(user.Id);
            return new
            {
                user,
                token
            }; 
        }

       
    }
}
