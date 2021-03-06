using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Auth
{
    public interface IAuthenticateService
    {
        public Task<User> LoginAsync(
            string userName
            , string password
            , bool isPersistent = true
            , bool isShouldBeLocked = false
            );

        public Task<User> GetOrCreateExternalLoginUser(
            string provider,
            string key,
            string email,
            string firstName,
            string lastName);

    }
}
