using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Domain.Configurations
{
    public class CourseToCourseTagsConfig
        : IEntityTypeConfiguration<CourseToCourseTag>
    {
        public void Configure(EntityTypeBuilder<CourseToCourseTag> builder)
        {
            builder.HasKey(
                ct => new
                {
                    ct.CourseId,
                    ct.TagId
                }
                );
            builder
                .HasOne(ct => ct.Course)
                .WithMany(c => c.Tags)
                .HasForeignKey(ct => ct.CourseId);
            builder
               .HasOne(ct => ct.Tag)
               .WithMany(c => c.TagTargets)
               .HasForeignKey(ct => ct.TagId);
        }
    }
}
