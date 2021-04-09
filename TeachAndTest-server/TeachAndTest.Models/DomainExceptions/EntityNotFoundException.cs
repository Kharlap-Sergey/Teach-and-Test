using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.DomainExceptions
{
    public class EntityNotFoundException : Exception
    {
        public EntityNotFoundException()
            :base("Unable to found speciic entity.")
        {

        }
    }
}
