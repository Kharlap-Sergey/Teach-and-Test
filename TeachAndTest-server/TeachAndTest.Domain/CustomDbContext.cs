﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TeachAndTest.Domain.Configurations;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.Domain
{
    public class CustomDbContext : IdentityDbContext<User, Role, int>
    {
        public DbSet<FileDetails> Files { set; get; }
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
            modelBuilder.ApplyConfiguration(new UsersConfiguration());
            base.OnModelCreating(modelBuilder);
        }

    }
}
