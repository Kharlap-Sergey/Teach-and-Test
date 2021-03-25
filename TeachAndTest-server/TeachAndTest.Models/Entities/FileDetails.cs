using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Entities
{
    public class FileDetails : Entity<Guid>
    {
        public string Path { get; set; }
        public DateTime? Created { get; set; }
        public bool? Deleted { get; set; }
        public string DocumentName { get; set; }
        public string DocType { get; set; }
        public string DocUrl { get; set; }
    }
}
