using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Exceptions;
using TeachAndTest.Models.Exceptions;

namespace TeachAndTest.Api.Common.Middleware
{
    public sealed class ExceptionMiddleware
    {
        private readonly RequestDelegate next;
        //private static readonly log4net.ILog log4net = global::log4net.LogManager.GetLogger(typeof(ExceptionMiddleware));
        public ExceptionMiddleware(
            RequestDelegate next
            )
        {
            this.next = next;
        }
        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await next(httpContext);
            }
            catch (Exception ex)
            {
                //ExceptionMiddleware.log4net.Error($"Processing request {ex}", ex);
                await HandleExceptionAsync(httpContext, ex);
            }
        }
        private Task HandleExceptionAsync(
            HttpContext context,
            Exception exception
            )
        {
            context.Response.ContentType = "application/json";
            HttpStatusCode statusCode = HttpStatusCode.InternalServerError;
            string message = "Something was incorrect";
            if(exception.Message.Length > 0)
            {
                message = exception.Message;
            }

            //code logic here
            if (exception is AuthorizeException)
            {
                statusCode = HttpStatusCode.NotFound;
            }
            else if(exception is UnauthorizedUserException)
            {
                statusCode = HttpStatusCode.Unauthorized;
            }
            else if(exception is NotFoundException)
            {
                statusCode = HttpStatusCode.NotFound;
            }
            //else if (exception is DuplicateEmailException)
            //{
            //    message = "this email is already taken";
            //    statusCode = HttpStatusCode.Forbidden;
            //}
            //else if (exception is DuplicateNicknameException)
            //{
            //    message = "this nickname is already taken";
            //    statusCode = HttpStatusCode.Forbidden;
            //}
            //else if (exception is UnauthorizedAccessException)
            //{
            //    var e = exception as UnauthorizedAccessException;
            //    message = e.Message;
            //    statusCode = HttpStatusCode.Forbidden;
            //}
            //else if (exception is ImgNotFoundException)
            //{
            //    var e = exception as ImgNotFoundException;
            //    message = e.Message;
            //    statusCode = HttpStatusCode.NotFound;
            //}

            context.Response.StatusCode = (int)statusCode;
            return context.Response.WriteAsync(new ErrorDetails()
            {
                StatusCode = context.Response.StatusCode,
                Message = message
            }.ToString());
        }
    }
}
