using AutoMapper;
using TeachAndTest.Api.Common.ViewModel;
using TeachAndTest.Api.Common.ViewModel.Course;
using TeachAndTest.Api.Common.ViewModel.RatingModels;
using TeachAndTest.Models.Entities;
using TeachAndTest.Models.Entities.CourseEntities;

namespace TeachAndTest.Api.Common.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegistrateUserRequestVM, User>()
                .ForMember(
                   u => u.UserName,
                   o => o.MapFrom(src => src.Email)
                   )
                .ReverseMap();

            CreateMap<UserVM, User>()
                .ReverseMap();

            CreateMap<CreatingCourseVM, Course>()
                .ReverseMap();

            CreateMap<CourseRatingVM, CourseRatingMark>()
                .ReverseMap();
        }
    }
}
