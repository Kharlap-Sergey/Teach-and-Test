using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.BusinessLogic.CourseLogic
{
    public interface ICourseService
    {
        public Task<Course> CreateAsync(
            Course course,
            int committerId
            );

        public Task<Course> DeleteAsync(
            int ocurseId,
            int committerId
            );
        public Task<Course> GetByIdAsync(
            int id
            );

        public Task<IEnumerable<Course>> GetByAutherIdAsync(
            int autherId
            );

        public Task<Course> UpdateDetailsAsync(
            int courseId,
            Course coursedetails,
            int committerId
            );
        public Task<Course> UpdateLogoAsync(
            int courseId,
            Guid fileId,
            int committerId
            );
        public Task<Course> UpdateLogoAsync(
           int courseId,
           FileDetails fileDetails,
           int committerId
           );
    }
}
