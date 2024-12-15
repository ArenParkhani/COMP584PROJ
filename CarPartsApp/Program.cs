using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using System.Text;
using YourNamespace.Models; // Replace with the actual namespace for ApplicationUser
using YourNamespace; // Replace with the namespace for AppDbContext

namespace CarPartsApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Register services in the DI container
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder
                        .AllowAnyOrigin()    // Allows any origin
                        .AllowAnyMethod()    // Allows any HTTP method (GET, POST, PUT, DELETE)
                        .AllowAnyHeader());  // Allows any header
            });

            // Add services to the container (e.g., controllers)
            builder.Services.AddControllers();

            var app = builder.Build();

            // Use CORS with the "AllowAll" policy before other middlewares
            app.UseCors("AllowAll");

            // Middleware for routing
            app.UseRouting();

            // Map controllers (API endpoints)
            app.MapControllers();

            // Run the application
            app.Run();
        }
    }
}