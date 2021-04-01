namespace TeachAndTest.Models.Entities.General
{
    public class RatingMark<TDestination, TDestinationKey>
        : ForignEntity<string, TDestination, TDestinationKey>
    {
        public double Mark { get; set; }
        public int AuthorId { get; set; }
        public User Author { get; set; }
    }
}
