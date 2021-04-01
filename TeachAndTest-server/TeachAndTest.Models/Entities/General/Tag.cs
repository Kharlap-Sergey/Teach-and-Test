namespace TeachAndTest.Models.Entities.General
{
    public class Tag<TDestination, TDestinationKey>
        : ForignEntity<string, TDestination, TDestinationKey>,
          ITag
    {
        public virtual string TagWord { get; set; }
    }
}
