using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.Domain.Configurations
{
    public class UsersConfiguration
        : IEntityTypeConfiguration<User>
    {
        public void Configure(
            EntityTypeBuilder<User> builder
            )
        {
            //builder.HasIndex(u => u.Email).IsUnique();
            builder.HasOne(u => u.Avatar)
                .WithOne(a => a.Author)
                .HasForeignKey<FileDetails>(
                a => a.AuthorId);
        }
    }
}
