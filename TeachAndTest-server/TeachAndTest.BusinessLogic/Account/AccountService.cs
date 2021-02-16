using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

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
        public async Task<User> CreateAsync(User user, string password)
        {
            var result = await userManager.CreateAsync(user, password);
            if( !result.Succeeded )
            {
                //todo implement logic for exception here
                throw new System.Exception();
            }
            return await userManager.FindByNameAsync(user.UserName);
        }
    }
}
