﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Linq;
using TeachAndTest.Domain.Configurations;
using TeachAndTest.Models.Entities;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Domain
{
    public class CustomDbContext : IdentityDbContext<User, Role, int>
    {
        public DbSet<FileDetails> Files { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseRatingMark> CourseRatingMarks{get; set;}
        public CustomDbContext(
            DbContextOptions<CustomDbContext> options
            )
            : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new UsersConfig());
            modelBuilder.ApplyConfiguration(new FilesConfig());
            modelBuilder.ApplyConfiguration(
                    new CourseRatingMarksConfig()
                );
            var keysProperties = modelBuilder.Model.GetEntityTypes()
                .Select(x => x.FindPrimaryKey()).SelectMany(x => x.Properties);
            foreach (var property in keysProperties)
            {
                property.ValueGenerated = ValueGenerated.OnAdd;
            }
        }

    }
}
