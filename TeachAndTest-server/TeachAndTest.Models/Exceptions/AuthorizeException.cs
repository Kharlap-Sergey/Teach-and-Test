using System;

namespace TeachAndTest.Models.Exceptions
{
    public class AuthorizeException : Exception
    {
        public AuthorizeException()
            :base("invalid login or password")
        {}
    }
}
