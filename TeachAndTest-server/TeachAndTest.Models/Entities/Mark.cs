using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Entities
{
    public class RatingMark<TDestination, TDestinationKey> : Entity<string>
    {
        public int Mark { get; set; }
        public virtual TDestinationKey ForignId { get; set; }
        public virtual TDestination Forign { get; set; }
    }
}
