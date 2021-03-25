using Microsoft.AspNetCore.Identity;

namespace TeachAndTest.Models.Entities
{
    public class User : IdentityUser<int>
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int AvatarId { set; get; }
        public FileDetails Avatar { set; get; }
    }
}
