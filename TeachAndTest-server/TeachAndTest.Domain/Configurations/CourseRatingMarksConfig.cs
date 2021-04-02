using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Domain.Configurations
{
    public class CourseRatingMarksConfig
        : IEntityTypeConfiguration<CourseRatingMark>
    {
        public void Configure(EntityTypeBuilder<CourseRatingMark> builder)
        {
            builder.Property(e => e.Id)
                   .ValueGeneratedOnAdd();
        }
    }
}
