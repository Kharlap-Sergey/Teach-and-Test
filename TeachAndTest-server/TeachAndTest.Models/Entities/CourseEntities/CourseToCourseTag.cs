namespace TeachAndTest.Models.Entities.CourseEntities
{
    public class CourseToCourseTag
    {
        public string CourseId { get; set; }
        public Course Course { get; set; }
        public string TagId { get; set; }
        public CourseTag Tag {get; set;}
    }
}
