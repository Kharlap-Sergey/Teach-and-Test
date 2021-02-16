using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Account
{
    public interface IAccountService
    {
        public Task<User> CreateAsync(User user, string password);
    }
}
