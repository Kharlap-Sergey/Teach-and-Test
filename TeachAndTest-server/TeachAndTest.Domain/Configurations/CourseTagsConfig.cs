﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Domain.Configurations
{
    public class CourseTagsConfig
        : IEntityTypeConfiguration<CourseTag>
    {
        public void Configure(EntityTypeBuilder<CourseTag> builder)
        {
            
        }
    }
}