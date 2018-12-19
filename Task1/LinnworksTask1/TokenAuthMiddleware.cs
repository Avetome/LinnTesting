using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreTest
{
    public class TokenAuthMiddleware
    {
        private readonly RequestDelegate _next;

        public TokenAuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var authHeader = context.Request.Headers.TryGetValue("Authorization", out var apiKeyValuesHeaders);

            if (authHeader == false)
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                return;
            }

            var authKeyValues = StringValues.Concat("Authorization", apiKeyValuesHeaders);

            if (authKeyValues.Count != 1)
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                return;
            }

            if (string.IsNullOrEmpty(authKeyValues[0]))
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                return;
            }

            var authKey = authKeyValues[0];

            if (!Guid.TryParse(authKey, out var authGuid))
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                return;
            }

            context.Items["Authorization"] = authKey;

            await _next(context);
        }
    }

    public static class TokenAuthMiddlewareExtensions
    {
        public static IApplicationBuilder UseAuthKeyAuthorization(this IApplicationBuilder app)
        {
            return app.UseMiddleware<TokenAuthMiddleware>();
        }
    }
}
