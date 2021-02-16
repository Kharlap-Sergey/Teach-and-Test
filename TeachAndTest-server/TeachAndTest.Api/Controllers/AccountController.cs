using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel;
using TeachAndTest.BusinessLogic.Account;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.Api.Controllers
{
    public class AccountController : ApiControllerBase
    {
        private readonly IAccountService accountService;

        public AccountController(
            IAccountService accountService
            )
        {
            this.accountService = accountService;
        }

        [HttpPost]
        public async Task<User> Registrate(
            [FromBody] RegistrateUserRequestVM userVM
            )
        {
            //todo authomapper here
            var user = new User();

            User RegistratedUser = await accountService.CreateAsync(user, userVM.Password);

            return RegistratedUser;
        }
    }
}
