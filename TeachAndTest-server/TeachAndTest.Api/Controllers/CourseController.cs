using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.Api.Common.ViewModel.CourseModels;
using TeachAndTest.BusinessLogic.CourseLogic;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Api.Controllers
{
    public class CourseController : ApiControllerBase
    {
        private readonly IMapper mapper;
        private readonly ICourseService courseService;

        public CourseController(
            IMapper mapper,
            ICourseService courseService
            )
        {
            this.mapper = mapper;
            this.courseService = courseService;
        }

        #region post
        [HttpPost]
        //disavle while teseting
        //[Authorize]
        public async Task<ActionResult<CourseVM>> Create(
            [FromBody] CreatingCourseVM createCourseVM
            )
        {
            var course = this.mapper.Map<Course>(createCourseVM);
            course = await this.courseService.CreateAsync(
                course,
                1
                );

            return this.mapper.Map<CourseVM>(course);
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<CourseVM>> UploadAvatar(
            [FromBody] Guid avatarId,
            [FromBody] int courseId
            )
        {
            Course course = await this.courseService
                .UpdateLogoAsync(
                    courseId,
                    avatarId,
                    this.GetCommitterId()
                );
            return this.mapper.Map<CourseVM>(course);
        }
        #endregion

        #region get
        [HttpGet("{id}")] 
        public async Task<ActionResult<CourseVM>> Get(int id)
        {
            Course course = await this.courseService.GetByIdAsync(id);

            return this.mapper.Map<CourseVM>(course);
        }

        #endregion
    }
}
