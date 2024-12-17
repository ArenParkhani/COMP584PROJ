using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configure logging
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // Add Swagger services
// Register AutoMapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Register CarService and CarBrandService
builder.Services.AddScoped<ICarService, CarService>();
builder.Services.AddScoped<ICarBrandService, CarBrandService>();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

// Configure the DbContext with MySQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 21))));

var app = builder.Build();

// Apply database migrations automatically
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    try
    {
        dbContext.Database.Migrate();
        Console.WriteLine("Database migrations applied successfully.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error applying database migrations: {ex.Message}");
    }
}

// Log when the application starts
app.Lifetime.ApplicationStarted.Register(() =>
{
    Console.WriteLine("Application started.");
});



// Enable HTTPS redirection
app.UseHttpsRedirection();

app.UseCors("AllowAllOrigins"); // Ensure this is called before mapping endpoints

// Sample endpoint to get car brands
app.MapGet("api/carbrands", async (ApplicationDbContext db) =>
{
    var carBrands = await db.CarBrands.ToListAsync();
    return carBrands;
})
.WithName("GetCarBrands");

// Test endpoint
app.MapGet("api/test", () => "Test endpoint is working!");

// Health check endpoint
app.MapGet("api/health", () => Results.Ok("Application is running."));
// Use CORS
app.UseCors("AllowAnyOrigin");

// Ensure the AuthController is mapped
app.MapControllers(); // This line is crucial for mapping your AuthController

// Run the application on all network interfaces and ports 5000 (HTTP) and 5001 (HTTPS)
app.Run();
