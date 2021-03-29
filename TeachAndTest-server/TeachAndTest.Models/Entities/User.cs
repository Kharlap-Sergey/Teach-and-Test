using Microsoft.AspNetCore.Identity;
using System;

namespace TeachAndTest.Models.Entities
{
    public class User : IdentityUser<int>
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public Guid? AvatarId { set; get; }
        public FileDetails Avatar { set; get; }
    }
}
