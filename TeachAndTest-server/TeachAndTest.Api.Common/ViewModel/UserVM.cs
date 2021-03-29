using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Api.Common.ViewModel
{
    public class UserVM
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public Guid? AvatarId { set; get; }
        public bool EmailConfirmed { get; set; }
    }
}
