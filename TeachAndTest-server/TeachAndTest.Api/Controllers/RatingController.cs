using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel.RatingModels;
using TeachAndTest.BusinessLogic.RatingLogic;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Api.Controllers
{
    public class RatingController : ApiControllerBase
    {
        private readonly IMapper mapper;
        private readonly IRatingService<
            CourseRatingMark,
            Course,
            int> courseRatingService;

        public RatingController(
            IMapper mapper,
            IRatingService<
                CourseRatingMark,
                Course,
                int
                > courseRatingService
            )
        {
            this.mapper = mapper;
            this.courseRatingService = courseRatingService;
        }

        #region post
        [Authorize]
        [HttpPost]
        public async Task<CourseRatingVM> SetCourseRating(
            SetCourseRatingVM request
            )
        {

           CourseRatingMark rating = 
                await this.courseRatingService.SetRatingAsync(
                        request.CourseId,
                        request.Mark,
                        this.GetCommitterId()
                        );;

            return this.mapper.Map<CourseRatingVM>(rating);
        }
        #endregion
    }
}
