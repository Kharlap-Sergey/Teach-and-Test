namespace TeachAndTest.Models.Entities.General
{
    public class Tag<TDestination, TDestinationKey>
        : ForignEntity<string, TDestination, TDestinationKey>
    {
        public virtual string TagWord { get; set; }
    }
}
