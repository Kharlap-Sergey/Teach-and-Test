using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Api.Common.ViewModel.Account
{
    public class ChangePasswordRequestVM
    {
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
