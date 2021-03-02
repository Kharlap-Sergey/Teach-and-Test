using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel;
using TeachAndTest.BusinessLogic.Account;
using TeachAndTest.Models.Entities;
using TeachAndTest.Worker;

namespace TeachAndTest.Api.Controllers
{
    public class AccountController : ApiControllerBase
    {
        private readonly IAccountService accountService;
        private readonly IEmailService emailService1;

        public AccountController(
            IAccountService accountService,
            IEmailService emailService1
            )
        {
            this.accountService = accountService;
            this.emailService1 = emailService1;
        }

        [HttpPost]
        public async Task<ActionResult<User>> Register(
            [FromBody] RegistrateUserRequestVM userVM
            )
        {
            //todo authomapper here
            var user = new User()
            {
                UserName = userVM.Email,
                Email = userVM.Email
            };

            User RegistratedUser = await accountService.CreateAsync(user, userVM.Password);
            await emailService1.SendNotificationAsync(RegistratedUser.Email, "hello", "hello");
            return RegistratedUser;
        }


        [HttpGet]
        public async Task<ActionResult<object>> Test()
        {
            var result = new
            {
                user = "some"
            };
            return result;

        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<object>> TestAuth()
        {
            var result = new
            {
                user = "some"
            };
            return result;

        }
    }
}
