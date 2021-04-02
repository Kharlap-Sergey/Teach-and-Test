using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Api.Common.ViewModel.RatingModels
{
    public class CourseRatingVM
    {
        public string Id { get; set; }
        public string CourseId { get; set; }
        public double Mark { get; set; }
        public int AuthorId { get; set; }
    }
}
