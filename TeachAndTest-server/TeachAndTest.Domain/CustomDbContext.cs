using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TeachAndTest.Domain.Configurations;
using TeachAndTest.Models.Entities;

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
            modelBuilder.ApplyConfiguration(new UsersConfig());
            base.OnModelCreating(modelBuilder);
        }

    }
}
