using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel.Course;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Api.Controllers
{
    public class CourseController : ApiControllerBase
    {
        private readonly IMapper mapper;

        public CourseController(
            IMapper mapper
            )
        {
            this.mapper = mapper;
        }

        #region post
        [HttpPost]
        //disavle while teseting
        //[Authorize]
        public async Task<ActionResult> CreateCourse(
            CreatingCourseVM createCourseVM
            )
        {
            var course = this.mapper.Map<Course>(createCourseVM);
            throw new NotImplementedException();
        }
        #endregion
    }
}
