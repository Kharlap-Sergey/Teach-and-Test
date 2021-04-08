using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.Domain.Configurations
{
    public class UsersConfig
        : IEntityTypeConfiguration<User>
    {
        public void Configure(
            EntityTypeBuilder<User> builder
            )
        {
            //builder.HasIndex(u => u.Email).IsUnique();
        }
    }
}
