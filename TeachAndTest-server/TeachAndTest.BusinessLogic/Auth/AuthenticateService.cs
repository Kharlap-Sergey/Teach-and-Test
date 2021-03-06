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

            if(!result.Succeeded)
            {
                //todo Implement this feature 
                throw new Exception("The user name or password is not correct");
            }

            User user = await userManager.FindByNameAsync(userName);
            return user;
        }
        public async Task<User> GetOrCreateExternalLoginUser(
            string provider,
            string key,
            string email,
            string firstName,
            string lastName)
        {
            // Login already linked to a user
            var user = await userManager.FindByLoginAsync(provider, key);
            if(user != null)
                return user;

            user = await userManager.FindByEmailAsync(email);
            if(user == null)
            {
                // No user exists with this email address, we create a new one
                //Todo add users maper
                user = new User
                {
                    Email = email,
                    UserName = email,
                };

                await userManager.CreateAsync(user);
            }

            // Link the user to this login
            var info = new UserLoginInfo(provider, key, provider.ToUpperInvariant());
            var result = await userManager.AddLoginAsync(user, info);
            if(result.Succeeded)
                return user;

            return null;

        }

    }
}
