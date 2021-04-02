using Microsoft.AspNetCore.Authorization;
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

        #region post
        [Authorize]
        [HttpPost]
        public async Task<CourseRatingMark> SetCourseRating(string targetId)
        {
            CourseRatingMark rating = 
                await this.courseRatingService.SetRatingAsync(
                        targetId,
                        4,
                        1
                        );

            return rating;
        }
        #endregion
    }
}
