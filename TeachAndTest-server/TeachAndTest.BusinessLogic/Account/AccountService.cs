using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;
using TeachAndTest.Models.Exceptions;

namespace TeachAndTest.BusinessLogic.Account
{
    [ServiceImplementation(typeof(IAccountService))]
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> userManager;

        public AccountService(
            UserManager<User> userManager
            )
        {
            this.userManager = userManager;
        }

        public async Task<bool> ChangePasswordAsync(
            int userId,
            string oldPassword, 
            string newPassword
            )
        {
            //todo: confine amount of unsuccesfull attemptes to change password
            User user = await this.userManager
                .FindByIdAsync(userId.ToString());

            if(user == null)
            {
                throw new Exception("internal problem with user");
            }

            var result = await this.userManager
                .ChangePasswordAsync(
                user,
                oldPassword,
                newPassword
                );
            return result.Succeeded;
        }

        public async Task<User> CreateAsync(User user, string password)
        {
            var result = await userManager.CreateAsync(user, password);
            if(!result.Succeeded)
            {
                //todo implement logic for exception here
                throw new System.Exception();
            }
            return await userManager.FindByNameAsync(user.UserName);
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
                var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
                await userManager.ConfirmEmailAsync(user, code);
            }

            // Link the user to this login
            var info = new UserLoginInfo(provider, key, provider.ToUpperInvariant());
            var result = await userManager.AddLoginAsync(user, info);
            if(result.Succeeded)
                return user;

            return null;

        }

        public async Task<User> GetUserAsync(int id)
        {
            User user = await userManager.FindByIdAsync(id.ToString());
            if(user == null)
            {
                throw new NotFoundException();
            }

            return user;
        }
    }
}
