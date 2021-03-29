using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Exceptions
{
    public class NotAllowedException: Exception
    {
        public NotAllowedException()
            : base("Access to the source was been rejected")
        {

        }
    }
}
