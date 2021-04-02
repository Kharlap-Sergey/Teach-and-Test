using System;
using System.ComponentModel.DataAnnotations;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.Models.Entities
{
    public class FileDetails : Entity<Guid?>
    {
        [Required]
        public DateTime? Created { get; set; }
        public bool? Deleted { get; set; }
        [Required]
        public bool IsPrivate { get; set; }
        public string DocumentName { get; set; }
        public string DocType { get; set; }
        public string DocUrl { get; set; }
        [Required]
        public int? AuthorId { set; get; }
        public User Author { set; get; }
    }
}
