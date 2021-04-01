using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeachAndTest.Domain;
using TeachAndTest.Models.Entities.General;
using TeachAndTest.Models.Exceptions;

namespace TeachAndTest.BusinessLogic.RatingLogic
{
    [ServiceImplementation(typeof(IRatingService<,,>))]
    public class RatingService<TRating, TRatingTarget, TRatingTargetKey>
        : IRatingService<TRating, TRatingTarget, TRatingTargetKey>
        where TRating : RatingMark<TRatingTarget, TRatingTargetKey>, new()
        where TRatingTarget : class
        where TRatingTargetKey : IEquatable<TRatingTargetKey>
    {
        private readonly IGenericRepository<TRating> ratingRepository;
        private readonly IGenericRepository<TRatingTarget> targetRepository;

        public RatingService(
            IGenericRepository<TRating> ratingRepository,
            IGenericRepository<TRatingTarget> targetRepository
            )
        {
            this.ratingRepository = ratingRepository;
            this.targetRepository = targetRepository;
        }
        public async Task<double> CalculateRatingAsync(
            TRatingTargetKey targetKey
            )
        {
            IEnumerable<TRating> ratings =
                await this.GetRatingMarksAsync(targetKey);

            double sum = 0;
            foreach(var rating in ratings)
            {
                sum += rating.Mark;
            }

            return sum / ratings.Count();
        }
        public async Task<IEnumerable<TRating>> GetRatingMarksAsync(
            TRatingTargetKey targetKey
            )
        {
            return await this.ratingRepository.GetAsync(
                rating =>
                    EqualityComparer<TRatingTargetKey>.Default.Equals(
                        rating.DestinationEntityId, targetKey
                        )
                );
        }

        public async Task<TRating> SetRatingAsync(
            TRatingTargetKey targetKey, 
            double mark, 
            int committerId
            )
        {
            var target = await this.targetRepository.GetByIdAsync(targetKey);
            if(target == null)
            {
                throw new NotFoundException();
            }

            TRating rating = this.ratingRepository.Get(
                rating => rating.AuthorId == committerId
                    && EqualityComparer<TRatingTargetKey>.Default.Equals(
                        rating.DestinationEntityId, targetKey
                        )
                ).FirstOrDefault();

            if(rating == null)
            {
                rating = await this.CreateRatingAsync(
                    target,
                    mark,
                    committerId
                    );
                return rating;
            }

            rating.Mark = mark;
            rating = await this.ratingRepository
                .UpdateAsync(rating);

            return rating;
        }

        private async Task<TRating> CreateRatingAsync(
            TRatingTarget target, 
            double mark, 
            int committerId
            )
        {
            var rating = new TRating
            {
                Mark = mark,
                DestinationEntity = target,
                AuthorId = committerId,
            };

            rating = await this.ratingRepository.CreateAsync(rating);
            if (rating == null)
            {
                throw new Exception();
            }

            return rating;
        }
    }
}
