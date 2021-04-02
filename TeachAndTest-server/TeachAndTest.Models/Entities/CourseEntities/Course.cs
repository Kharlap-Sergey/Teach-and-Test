using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.Models.Entities.CourseEntities
{
    public class Course : Entity<string>
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string NormalizedTitle { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int? AuthorId { get; set; }
        public User Author { get; set; }
        public Guid? LogoId { get; set; }
        public FileDetails Logo { get; set; }
        public ICollection<CourseToCourseTag> Tags { get; set; }
    }
}
