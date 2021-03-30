using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using TeachAndTest.BusinessLogic.Files;
using TeachAndTest.Models.Entities;
using TeachAndTest.Models.Exceptions;

namespace TeachAndTest.BusinessLogic.Account
{
    [ServiceImplementation(typeof(IAccountService))]
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> userManager;
        private readonly IFilesService filesService;

        public AccountService(
            UserManager<User> userManager,
            IFilesService filesService
            )
        {
            this.userManager = userManager;
            this.filesService = filesService;
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

            if (user == null)
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
            await this.CreateUserAsync(user, password);

            return await this.userManager.FindByNameAsync(user.UserName);
        }

        public async Task<User> GetOrCreateExternalLoginUserAsync(
          string provider,
          string key,
          string email,
          string firstName,
          string lastName
            )
        {
            // Login already linked to a user
            var user = await this.userManager.FindByLoginAsync(provider, key);
            if (user != null)
                return user;

            user = await this.userManager.FindByEmailAsync(email);
            if (user == null)
            {
                // No user exists with this email address, we create a new one
                //Todo add users maper
                user = new User
                {
                    Email = email,
                    UserName = email,
                    Firstname = firstName,
                    Lastname = lastName
                };

                await this.CreateUserAsync(user);
                user = await this.userManager.FindByNameAsync(user.UserName);

                var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
                await userManager.ConfirmEmailAsync(user, code);
            }

            return user;
        }

        public async Task<User> GetUserAsync(int id)
        {
            User user = await this.FindUserByIdAsync(id);

            return user;
        }

        public async Task<User> UpdateUserAsync(
            User userModelToUpdate,
            int commiterId
            )
        {

            var user = await this.FindUserByIdAsync(commiterId);

            user.Firstname = userModelToUpdate.Firstname;
            user.Lastname = userModelToUpdate.Lastname;

            var result = await this.userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                return user;
            }
            throw new Exception();
        }

        public async Task<User> UploadAvatarAsync(
            Guid avatarId,
            int committerId
            )
        {
            var user = await this.FindUserByIdAsync(committerId);

            var fileDetails = await this.filesService.GetFileDetailsAsync(
                avatarId,
                committerId
                );

            user.AvatarId = fileDetails.Id;
            await this.userManager.UpdateAsync(user);

            return user;
        }

        protected async Task<User> FindUserByIdAsync(
            int userId
            )
        {
            var user = await this.userManager.FindByIdAsync(
                userId.ToString()
                );

            if (user == null)
            {
                throw new NotFoundException("Unable to find user.");
            }

            return user;
        }
        private async Task<IdentityResult> CreateUserAsync(
            User user
            )
        {
            var result = await this.userManager.CreateAsync(user);

            this.ChackeCreateUserResult(result);

            return result;
        }

        private async Task<IdentityResult> CreateUserAsync(
           User user,
           string password
           )
        {
            var result = await this.userManager.CreateAsync(user, password);

            this.ChackeCreateUserResult(result);

            return result;
        }
        private void ChackeCreateUserResult(IdentityResult result)
        {
            if (!result.Succeeded)
            {
                //todo implement logic for exception here
                throw new System.Exception("unable to create user account");
            }
        }
    }
}
