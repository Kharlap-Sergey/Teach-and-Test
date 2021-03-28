using System;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Account
{
    public interface IAccountService
    {
        public Task<User> CreateAsync(User user, string password);

        public Task<User> GetOrCreateExternalLoginUser(
            string provider,
            string key,
            string email,
            string firstName,
            string lastName);

        public Task<User> GetUserAsync(
            int id
            );

        public Task<bool> ChangePasswordAsync(
            int userId,
            string oldPassword,
            string newPassword
            );
    }
}
