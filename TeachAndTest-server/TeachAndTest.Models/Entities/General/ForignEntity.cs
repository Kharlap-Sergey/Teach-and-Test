namespace TeachAndTest.Models.Entities.General
{
    public abstract class ForignEntity<TKey, TDestination, TDestinationKey> : Entity<TKey>
    {
        public virtual TDestinationKey DestinationEntityId { get; set; }
        public virtual TDestination DestinationEntity { get; set; }
    }
}
