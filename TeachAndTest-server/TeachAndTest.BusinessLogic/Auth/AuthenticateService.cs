using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using TeachAndTest.BusinessLogic.Account;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Auth
{
    [ServiceImplementation(typeof(IAuthenticateService))]
    public class AuthenticateService : IAuthenticateService
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IAccountService accountService;

        public AuthenticateService(
                UserManager<User> userManager, 
                SignInManager<User> signInManager,
                IAccountService accountService
            )
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.accountService = accountService;
        }

        public async Task<User> LoginAsync(
            string userName
            , string password
            , bool isPersistent = true
            , bool isShouldBeLocked = false
            )
        {
            var result =
                await signInManager.PasswordSignInAsync(
                    userName
                    , password
                    , isPersistent
                    , isShouldBeLocked
                    );

            if(!result.Succeeded)
            {
                //todo Implement this feature 
                throw new Exception("The user name or password is not correct");
            }

            User user = await userManager.FindByNameAsync(userName);
            return user;
        }

        public async Task<User> AuthenticateThrowGoogleAsync(string token)
        {
            GoogleJsonWebSignature.Payload payload;
            try
            {
                payload = await GoogleJsonWebSignature.ValidateAsync(
                    token,
                    new GoogleJsonWebSignature.ValidationSettings
                    {
                        Audience = new[] {
                            "664462309144-e1b6fgtcboicec22a1lo2bc8k76f1mh1.apps.googleusercontent.com"
                        }
                    }
                    );
            }
            catch(Exception e)
            {
                throw;
            }


            var user = await this.accountService
                .GetOrCreateExternalLoginUser(
                "google", 
                payload.Subject, 
                payload.Email, 
                payload.GivenName, 
                payload.FamilyName);

            return user;
        }
    }
}
