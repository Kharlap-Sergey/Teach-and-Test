using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.Models.Entities
{
    public class FileDetails : Entity<Guid>
    {
        public DateTime? Created { get; set; }
        public bool? Deleted { get; set; }
        public bool IsPrivate { get; set; }
        public string DocumentName { get; set; }
        public string DocType { get; set; }
        public string DocUrl { get; set; }
        public int? AuthorId { set; get; }
        public User Author { set; get; }
    }
}
