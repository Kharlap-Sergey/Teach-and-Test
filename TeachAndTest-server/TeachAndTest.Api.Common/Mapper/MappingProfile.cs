using AutoMapper;
using TeachAndTest.Api.Common.ViewModel;
using TeachAndTest.Models.Entities;

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
        }
    }
}
