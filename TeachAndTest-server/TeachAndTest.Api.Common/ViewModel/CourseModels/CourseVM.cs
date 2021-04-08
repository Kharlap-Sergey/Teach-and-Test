using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Api.Common.ViewModel.CourseModels
{
    public class CourseVM
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AuthorId { get; set; }
        public Guid? LogoId { get; set; }
    }
}
