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
        public async Task<ActionResult<CourseVM>> UploadLogo(
            [FromBody] UploadCourseLogoVM request
            )
        {
            Course course = await this.courseService
                .UpdateLogoAsync(
                    request.CourseId,
                    request.LogoId,
                    this.GetCommitterId()
                );
            return this.mapper.Map<CourseVM>(course);
        }

        [HttpPatch]
        public async Task<ActionResult<CourseVM>> Update(
            [FromBody] CourseVM request
            )
        {
            Course course = this.mapper.Map<Course>(request);

            course = await this.courseService
                .UpdateDetailsAsync(
                course.Id, 
                course, 
                GetCommitterId());

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
