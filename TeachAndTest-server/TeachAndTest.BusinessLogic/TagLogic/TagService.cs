using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeachAndTest.Domain;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.BusinessLogic.TagLogic
{
    [ServiceImplementation(typeof(ITagService<,,>))]
    public class TagService<TTag, TTagTarget, TTagTargetKey>
        : ITagService<TTag, TTagTarget, TTagTargetKey>
        where TTag : Tag<TTagTarget, TTagTargetKey>, new()
        where TTagTarget : class
    {
        private readonly IGenericRepository<TTag> tagRepository;

        public TagService(
            IGenericRepository<TTag> tagRepository
            )
        {
            this.tagRepository = tagRepository;
        }

        public async Task<TTag> CreateAsync(
            string tagWord,
            TTagTarget tagTarget
            )
        {
            var tag = new TTag();
            tag.TagWord = tagWord;
            tag.DestinationEntity = tagTarget;

            tag = await this.tagRepository.CreateAsync(tag);
            if (tag == null)
            {
                throw new Exception();
            }

            return tag;
        }
        public async Task<IEnumerable<TTagTargetKey>> GetTargetKeysByTagsAsync(
            IEnumerable<string> tagWords
            )
        {
            //todo selcet oder and pagin the keys
            var result = await this.tagRepository.GetAsync(
                (tag) => tagWords.Contains(tag.TagWord));

            var keys = result.Select(tag => tag.DestinationEntityId);


            return keys;
        }
    }
}
