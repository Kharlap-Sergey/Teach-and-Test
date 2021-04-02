using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;

namespace TeachAndTest.Models.Entities
{
    public class User : IdentityUser<int>
    {
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Lastname { get; set; }
        public Guid? AvatarId { set; get; }
        public FileDetails Avatar { set; get; }
    }
}
