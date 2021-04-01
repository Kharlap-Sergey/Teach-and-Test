using System;
using System.Collections.Generic;
using System.Text;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.BusinessLogic.TagLogic
{
    public interface ITagService <TTag>
        where TTag: ITag
    {
    }
}
