using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.CourseLogic
{
    public interface ICourseService
    {
        public Task<Course> CreateAsync(
            Course course,
            int committerId
            );

        public Task<Course> DeleteAsync(
            string ocurseId,
            int committerId
            );
        public Task<Course> GetByIdAsync(
            string id
            );

        public Task<IEnumerable<Course>> GetByAutherIdAsync(
            int autherId
            );

        public Task<Course> UpdateDetailsAsync(
            string courseId,
            Course coursedetails,
            int committerId
            );
        public Task<Course> UpdateLogoAsync(
            string courseId,
            Guid fileId,
            int committerId
            );
        public Task<Course> UpdateLogoAsync(
           string courseId,
           FileDetails fileDetails,
           int committerId
           );
    }
}
