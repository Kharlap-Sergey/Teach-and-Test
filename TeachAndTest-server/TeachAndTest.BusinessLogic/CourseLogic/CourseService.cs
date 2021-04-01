﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TeachAndTest.BusinessLogic.Files;
using TeachAndTest.BusinessLogic.TagLogic;
using TeachAndTest.Domain;
using TeachAndTest.Models.Entities;
using TeachAndTest.Models.Entities.CourseEntities;
using TeachAndTest.Models.Exceptions;

namespace TeachAndTest.BusinessLogic.CourseLogic
{
    [ServiceImplementation(typeof(ICourseService))]
    public class CourseService : ICourseService
    {
        private readonly IGenericRepository<Course> courseRepository;
        private readonly IFilesService filesService;
        private readonly ITagService<CourseTag, Course, string> tagService;

        public CourseService(
            IGenericRepository<Course> courseRepository,
            IFilesService filesService,
            ITagService<CourseTag, Course, string> tagService
            )
        {
            this.courseRepository = courseRepository;
            this.filesService = filesService;
            this.tagService = tagService;
        }
        public async Task<Course> CreateAsync(
            Course course,
            int committerId
            )
        {
            course = await this.courseRepository.CreateAsync(course);
            course.AuthorId = committerId;

            if (course == null)
            {
                throw new Exception();
            }

            return course;
        }

        public async Task<Course> DeleteAsync(
            string courseId, 
            int committerId
            )
        {
            Course course = await this.GetByIdAsync(courseId);
            this.CheckToBeAllowed(course, committerId);

            return await this.courseRepository.RemoveAsync(course);
        }
        public async Task<Course> GetByIdAsync(string id)
        {
            Course course = await this.courseRepository.GetByIdAsync(id);

            if (course == null)
            {
                throw new NotFoundException(
                    "Unable to fonund course with specific id."
                    );
            }
            return course;
        }

        public async Task<IEnumerable<Course>> GetByAutherIdAsync(
            int autherId
            )
        {
            return await this.courseRepository.GetAsync((c) => c.AuthorId == autherId);
        }

        public async Task<Course> UpdateDetailsAsync(
            string courseId,
            Course coursedetails, 
            int committerId
            )
        {
            Course course = await this.GetByIdAsync(courseId);

            course.Title = coursedetails.Title;
            course.NormalizedTitle = coursedetails.NormalizedTitle;
            course.Description = coursedetails.Description;

            return await this.UpdateAsync(course, committerId);
        }
        public async Task<Course> UpdateLogoAsync(
            string courseId, 
            Guid fileId,
            int committerId
            )
        {
            FileDetails fileDetails
                = await this.filesService.GetFileDetailsAsync(fileId);

            return await this.UpdateLogoAsync(
                courseId, 
                fileDetails,
                committerId
                );
        }

        public async Task<Course> UpdateLogoAsync(
            string courseId, 
            FileDetails fileDetails,
            int committerId
            )
        {
            Course course = await this.GetByIdAsync(courseId);

            course.Logo = fileDetails;

            await this.UpdateAsync(course, committerId);

            return course;
        }

        private async Task<Course> UpdateAsync(
            Course course,
            int committerId
            )
        {
            this.CheckToBeAllowed(course, committerId);

            course = await this.courseRepository.UpdateAsync(course);

            if (course == null)
            {
                throw new Exception("Could not update course.");
            }

            return course;
        }

        private void CheckToBeAllowed(
            Course course,
            int committerId)
        {
            if (course.AuthorId != committerId)
            {
                throw new NotAllowedException();
            }
        }
    }
}