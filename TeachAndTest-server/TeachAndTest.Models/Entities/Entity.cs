using System.ComponentModel.DataAnnotations;

namespace TeachAndTest.Models.Entities
{
    public class Entity<Tkey>
    {
        [Key]
        public virtual Tkey Id { get; set; }
    }
}
