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
            builder.HasOne(r => r.DestinationEntity)
                   .WithMany()
                   .HasForeignKey(r => r.DestinationEntityId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(r => r.Author)
                   .WithMany()
                   .HasForeignKey(r => r.AuthorId);
        }
    }
}
