using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Auth
{
    [ServiceImplementation(typeof(IAuthenticateService))]
    public class AuthenticateService : IAuthenticateService
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public AuthenticateService(
                UserManager<User> userManager
                , SignInManager<User> signInManager
            )
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
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

            if( !result.Succeeded )
            {
                //todo Implement this feature 
                throw new Exception("The user name or password is not correct");
            }

            User user = await userManager.FindByNameAsync(userName);
            return user;
        }
    }
}
