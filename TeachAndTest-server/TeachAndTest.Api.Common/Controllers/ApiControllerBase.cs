using Microsoft.AspNetCore.Mvc;
using TeachAndTest.Models.Exceptions;

namespace TeachAndTest.Api.Common.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ApiControllerBase : ControllerBase
    {
        protected int GetCommitterId()
        {
            if (User.Identity?.Name == null)
            {
                throw new UnauthorizedUserException();
            }
            return int.Parse(User.Identity.Name);
        }
    }
}
