using System.Collections.Generic;

namespace TeachAndTest.Models.Entities.General
{
    public class Tag<TTarget>
        : Entity<string>
    {
        public virtual string TagWord { get; set; }
        public ICollection<TTarget> TagTargets { get; set; }
    }
}
