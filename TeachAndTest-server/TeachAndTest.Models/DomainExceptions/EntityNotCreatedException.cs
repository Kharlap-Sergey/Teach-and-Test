using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.DomainExceptions
{
    public class EntityNotCreatedException : Exception
    {
        public EntityNotCreatedException() : base("")
        {

        }
    }
}
