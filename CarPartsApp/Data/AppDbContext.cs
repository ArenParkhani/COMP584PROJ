using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using YourNamespace.Models;

public class AppDbContext : IdentityDbContext<ApplicationUser>
{
    public DbSet<Car> Cars { get; set; }
    public DbSet<Part> Parts { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    { }
}

