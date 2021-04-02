using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using TeachAndTest.Domain;
using TeachAndTest.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using TeachAndTest.Api.Common.JWT;
using TeachAndTest.BusinessLogic.Account;
using System;
using TeachAndTest.BusinessLogic.Auth;
using TeachAndTest.Worker;
using TeachAndTest.Api.Common.Middleware;
using TeachAndTest.BusinessLogic.Files;
using TeachAndTest.Api.Common.Mapper;
using TeachAndTest.BusinessLogic.RatingLogic;
using TeachAndTest.BusinessLogic.CourseLogic;

namespace TeachAndTest.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            string connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<CustomDbContext>(options =>
              options.UseSqlServer(connection));

            //add autoMapper
            services.AddConfiguredAutoMapper();
            //Configuration for Identity
            services.Configure<IdentityOptions>(options =>
            {
                // Password settings.
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 1;
                options.Password.RequiredUniqueChars = 1;

                // Lockout settings.
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // User settings.
                options.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = true;
            });
            services.AddIdentity<User, Role>()
                   .AddEntityFrameworkStores<CustomDbContext>()
                   .AddDefaultTokenProviders();


            //todo Dependency injections match here
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            //toto inject services automaticly
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IAuthenticateService, AuthenticateService>();
            services.AddScoped<IEmailService, GmailService>();
            services.AddScoped<IFilesService, FilesService>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped(typeof(IRatingService<,,>), typeof(RatingService<,,>));

            //Todo extract into new section
            IConfigurationSection section = Configuration.GetSection(JwtAuthOptions.SectionName);
            JwtAuthOptions.AUDIENCE = section["AUDIENCE"];
            JwtAuthOptions.ISSUER = section["ISSUER"];
            JwtAuthOptions.KEY = section["KEY"];
            JwtAuthOptions.LIFETIME = int.Parse(section["LIFETIME"]);
            services.AddAuthentication(options =>
                   {
                       options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                       options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                       options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                   })
                   .AddJwtBearer(options =>
                   {
                       options.SaveToken = true;
                       options.RequireHttpsMetadata = false;

                       options.TokenValidationParameters = new TokenValidationParameters
                       {
                           ValidateIssuer = true,
                           ValidIssuer = JwtAuthOptions.ISSUER,
                           ValidateAudience = true,
                           ValidAudience = JwtAuthOptions.AUDIENCE,
                           ValidateLifetime = true,
                           IssuerSigningKey = JwtAuthOptions.GetSymmetricSecurityKey(),
                           ValidateIssuerSigningKey = true,
                       };
                   });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if( env.IsDevelopment() )
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseGlobalExceptionHandler();

            //todo cors policy resolution É
            //include CORS
            string host = Configuration["Cors:AvailabelHosts"];
            app.UseCors(builder => builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader());

            app.UseStaticFiles();

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
