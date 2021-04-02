using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.BusinessLogic.RatingLogic;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Api.Controllers
{
    public class RatingController : ApiControllerBase
    {
        private readonly IRatingService<
            CourseRatingMark, 
            Course, 
            string> courseRatingService;

        public RatingController(
            IRatingService<
                CourseRatingMark,
                Course,
                string
                > courseRatingService
            )
        {
            this.courseRatingService = courseRatingService;
        }

        [HttpPost]
        public async Task SetCourseRating()
        {
            await this.courseRatingService.SetRatingAsync(
                "1",
                        5,
                        1
                );
        }
    }
}
