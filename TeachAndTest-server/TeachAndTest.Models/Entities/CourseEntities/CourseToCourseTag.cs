using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.Models.Entities.CourseEntities
{
    public class CourseToCourseTag
        //: TargetToTagMap<
        //    Course,
        //    string,
        //    CourseTag,
        //    string
        //    >
    {
        public int CourseId { get; set; }
        public virtual Course Course { get; set; }
        public string TagId { get; set; }
        public virtual CourseTag Tag {get; set;}
    }
}
