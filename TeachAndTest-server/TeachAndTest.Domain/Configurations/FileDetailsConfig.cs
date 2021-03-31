using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.Domain.Configurations
{
    public class FileDetailsConfig
        : IEntityTypeConfiguration<FileDetails>
    {
        public void Configure(EntityTypeBuilder<FileDetails> builder)
        {
        }
    }
}
