using System.Collections.Generic;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.BusinessLogic.TagLogic
{
    public interface ITagService <TTag, TTagTarget, TTagTargetKey>
        where TTag: Tag<TTagTarget, TTagTargetKey>, new()
    {
        public Task<TTag> CreateAsync(
            string tagWord,
            TTagTarget tagTarget
            );

        public Task<IEnumerable<TTagTargetKey>> GetTargetKeysByTagsAsync(
            IEnumerable<string> tagWorks
            );
    }
}
