namespace TeachAndTest.Models.Entities.General
{
    public class RatingMark<TDestination, TDestinationKey>
        : ForignEntity<string, TDestination, TDestinationKey>
    {
        public int Mark { get; set; }
    }
}
