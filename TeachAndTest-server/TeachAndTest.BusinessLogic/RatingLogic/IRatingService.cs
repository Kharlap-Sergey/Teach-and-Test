using System.Collections.Generic;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities.General;

namespace TeachAndTest.BusinessLogic.RatingLogic
{
    public interface IRatingService
        <TRating, TRatingTarget, TRatingTargetKey>
        where TRating : RatingMark<TRatingTarget, TRatingTargetKey>, new()
    {
        public Task<TRating> 
            SetRatingAsync(
                TRatingTargetKey targetKey,
                double mark,
                int committerId
            );
        public Task<double> CalculateRatingAsync(
            TRatingTargetKey targetKey
            );
        public Task<
            IEnumerable<TRating>
            > GetRatingMarksAsync(
            TRatingTargetKey targetKey
            );
    }
}
