using System;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.Models.Entities.CourseEntities
{
    public class Course : Entity<string>
    {
        public string Title { get; set; }
        public string NormalizedTitle { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public User Author { get; set; }
        public Guid LogoId { get; set; }
        public FileDetails Logo { get; set; }
    }
}
