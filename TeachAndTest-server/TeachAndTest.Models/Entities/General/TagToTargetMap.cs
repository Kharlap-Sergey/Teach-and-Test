using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Entities.General
{
    public class TargetToTagMap<
        TTarget, 
        TTargetKey,
        TTag,
        TTagKey>
        where TTag : Tag<TTarget>
    {
        public TTargetKey TargetId { get; set; }
        public virtual TTarget Target { get; set; }
        public TTagKey TagId { get; set; }
        public virtual TTag Tag { get; set; }
    }
}
