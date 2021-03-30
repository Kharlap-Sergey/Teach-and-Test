using AutoMapper;
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
        private readonly IMapper mapper;

        public AccountController(
            IAccountService accountService,
            IEmailService emailService,
            UserManager<User> userManager,
            IMapper mapper
            )
        {
            this.accountService = accountService;
            this.emailService = emailService;
            this.userManager = userManager;
            this.mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<UserVM>> Register(
            [FromBody] RegistrateUserRequestVM userVM
            )
        {
            //todo authomapper here
            User user = this.mapper.Map<User>(userVM);
            User RegistratedUser = await this.accountService.CreateAsync(user, userVM.Password);
            var code = await this.userManager.GenerateEmailConfirmationTokenAsync(user);

            var callbackUrl = Url.Action(
                        "ConfirmEmail",
                        "Account",
                        new { userId = user.Id, code = code },
                        protocol: HttpContext.Request.Scheme);

            //Todo the link doesn't look like lick it is just plain text
            await this.emailService.SendMailAsync(RegistratedUser.Email,
                "Confirm your account",
                $"<a href='{callbackUrl}'>confirm your registration</a>");

            UserVM result = this.mapper.Map<UserVM>(RegistratedUser);
            return result;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<UserVM>> UpdateUser(UpdateUserVM request)
        {

            User user = await this.accountService
                .UpdateUserAsync(
                    this.mapper.Map<User>(request),
                    this.GetCommitterId()
                );

            return this.mapper.Map<UserVM>(user);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> ConfirmEmail(string userId, string code)
        {
            var user = await this.userManager.FindByIdAsync(userId);
            var result = await this.userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                //Todo add redirect 
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserVM>> Get(int id)
        {
            var user = await this.accountService.GetUserAsync(id);
            return this.mapper.Map<UserVM>(user);
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

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<UserVM>> UploadAvatar(Guid avatarId)
        {
            User user = await this.accountService
                .UploadAvatarAsync(
                    avatarId,
                    this.GetCommitterId()
                );
            return this.mapper.Map<UserVM>(user);
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
