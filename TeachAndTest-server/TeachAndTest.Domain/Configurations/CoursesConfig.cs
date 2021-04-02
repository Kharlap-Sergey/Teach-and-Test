using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Domain.Configurations
{
    public class CoursesConfig
        : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
           
        }
    }
}
