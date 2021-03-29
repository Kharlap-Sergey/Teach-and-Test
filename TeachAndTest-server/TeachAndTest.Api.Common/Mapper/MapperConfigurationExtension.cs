using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace TeachAndTest.Api.Common.Mapper
{
    public static class MapperConfigurationExtension
    {
        public static IServiceCollection AddConfiguredAutoMapper(
            this IServiceCollection services
            )
        {
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            services.AddAutoMapper(typeof(MappingProfile));

            return services;
        }
    }
}
