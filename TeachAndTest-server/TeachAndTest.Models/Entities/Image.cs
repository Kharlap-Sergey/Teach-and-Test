using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Entities
{
    public class Image : Entity<int>
    {
        public string Path { get; set; }
    }
}
