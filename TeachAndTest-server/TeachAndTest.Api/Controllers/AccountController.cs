using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel;
using TeachAndTest.Api.Common.ViewModel.Account;
using TeachAndTest.BusinessLogic.Account;
using TeachAndTest.Models.Entities;
using TeachAndTest.Worker;

namespace TeachAndTest.Api.Controllers
{
    public class AccountController : ApiControllerBase
    {
        private readonly IAccountService accountService;
        private readonly IEmailService emailService;
        private readonly UserManager<User> userManager;

        public AccountController(
            IAccountService accountService,
            IEmailService emailService,
            UserManager<User> userManager
            )
        {
            this.accountService = accountService;
            this.emailService = emailService;
            this.userManager = userManager;
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
            var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
            var callbackUrl = Url.Action(
                        "ConfirmEmail",
                        "Account",
                        new { userId = user.Id, code = code },
                        protocol: HttpContext.Request.Scheme);
     
            //Todo the link doesn't look like lick it is just plain text
            await emailService.SendMailAsync(RegistratedUser.Email, 
                "Confirm your account", 
                $"<a href='{callbackUrl}'>confirm your registration</a>");
            return RegistratedUser;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<User>> UpdateUser(UpdateUserVM request)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            var user = await userManager.FindByIdAsync(userId);
            var result = await userManager.ConfirmEmailAsync(user, code);
            if(result.Succeeded)
            {
                //Todo add redirect 
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            var user = await this.accountService.GetUserAsync(id);
            return user;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> ChangePassword(
            ChangePasswordRequestVM request)
        {
            bool success = await this.accountService
                .ChangePasswordAsync(
                    this.GetCommitterId(),
                    request.OldPassword,
                    request.NewPassword
                );

            if (!success)
            {
                return BadRequest();
            }

            return Ok();
        }


        #region test
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
        #endregion
    }
}
