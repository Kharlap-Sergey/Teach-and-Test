using System;

namespace TeachAndTest.Models.Exceptions
{
    public class UnauthorizedUserException : Exception
    {
        public UnauthorizedUserException() :
            base("You have to be authorized to acces to this source")
        { }
    }
}
