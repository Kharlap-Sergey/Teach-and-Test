using System;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Account
{
    public interface IAccountService
    {
        public Task<User> CreateAsync(User user, string password);
        public Task<bool> ChangePasswordAsync(
            int userId,
            string oldPassword,
            string newPassword
        );
        public Task<User> GetOrCreateExternalLoginUserAsync(
            string provider,
            string key,
            string email,
            string firstName,
            string lastName);
        public Task<User> GetUserAsync(
            int id
            );
        public Task<User> UpdateUserAsync(
            User user,
            int commiterId
            );
        public Task<User> UploadAvatarAsync(
            Guid avatarId,
            int commiterId
            );
    }
}
