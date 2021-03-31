using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel.Course;

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
        //disavle until teseting
        //[Authorize]
        public async Task<ActionResult> CreateCourse(
            CreatingCourseVM createCourseVM
            )
        {
            this.
            throw new NotImplementedException();
        }
        #endregion
    }
}
