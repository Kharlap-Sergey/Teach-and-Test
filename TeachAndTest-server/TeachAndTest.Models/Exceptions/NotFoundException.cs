using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException()
            : base("The requested resource cannot be found.")
        {

        }
    }
}
