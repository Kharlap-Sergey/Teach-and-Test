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

        public NotFoundException(string message)
           : base("The requested resource cannot be found." + message)
        {
        }
    }
}
