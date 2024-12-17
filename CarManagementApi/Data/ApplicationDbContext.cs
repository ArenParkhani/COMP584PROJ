using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<CarBrand> CarBrands { get; set; }
    public DbSet<Car> Cars { get; set; }
    public DbSet<User> Users { get; set; }

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    // Configure one-to-many relationship
    modelBuilder.Entity<Car>()
        .HasOne(c => c.CarBrand)
        .WithMany(cb => cb.Cars)
        .HasForeignKey(c => c.BrandId)
        .OnDelete(DeleteBehavior.Cascade);

    // Seed Car Brands
    modelBuilder.Entity<CarBrand>().HasData(
        new CarBrand { Id = 1, Name = "Toyota", Country = "Japan" },
        new CarBrand { Id = 2, Name = "Ford", Country = "USA" },
        new CarBrand { Id = 3, Name = "BMW", Country = "Germany" },
        new CarBrand { Id = 4, Name = "Honda", Country = "Japan" },
        new CarBrand { Id = 5, Name = "Chevrolet", Country = "USA" }
    );

    // Seed Cars
    modelBuilder.Entity<Car>().HasData(
        // Toyota
        new Car { Id = 1, BrandId = 1, Model = "Camry", Year = 2022, Features = "Hybrid, Sedan" },
        new Car { Id = 2, BrandId = 1, Model = "Corolla", Year = 2021, Features = "Compact, Efficient" },
        new Car { Id = 3, BrandId = 1, Model = "RAV4", Year = 2023, Features = "Compact SUV, AWD" },
        new Car { Id = 4, BrandId = 1, Model = "Prius", Year = 2020, Features = "Hybrid, Eco-Friendly" },

        // Ford
        new Car { Id = 5, BrandId = 2, Model = "Mustang", Year = 2021, Features = "Sport, V8 Engine" },
        new Car { Id = 6, BrandId = 2, Model = "F-150", Year = 2022, Features = "Pickup Truck, Towing Capacity" },
        new Car { Id = 7, BrandId = 2, Model = "Explorer", Year = 2023, Features = "SUV, Family Car" },
        new Car { Id = 8, BrandId = 2, Model = "Focus", Year = 2020, Features = "Compact, Efficient" },

        // BMW
        new Car { Id = 9, BrandId = 3, Model = "X5", Year = 2020, Features = "Luxury SUV" },
        new Car { Id = 10, BrandId = 3, Model = "3 Series", Year = 2021, Features = "Luxury Sedan, Sporty" },
        new Car { Id = 11, BrandId = 3, Model = "5 Series", Year = 2022, Features = "Executive Sedan, Comfort" },
        new Car { Id = 12, BrandId = 3, Model = "M3", Year = 2023, Features = "High-Performance Sedan" },

        // Honda
        new Car { Id = 13, BrandId = 4, Model = "Civic", Year = 2021, Features = "Compact, Reliable" },
        new Car { Id = 14, BrandId = 4, Model = "Accord", Year = 2022, Features = "Midsize Sedan, Fuel Efficient" },
        new Car { Id = 15, BrandId = 4, Model = "CR-V", Year = 2023, Features = "SUV, AWD" },
        new Car { Id = 16, BrandId = 4, Model = "Pilot", Year = 2020, Features = "SUV, Spacious" },

        // Chevrolet
        new Car { Id = 17, BrandId = 5, Model = "Silverado", Year = 2021, Features = "Pickup Truck, Durable" },
        new Car { Id = 18, BrandId = 5, Model = "Malibu", Year = 2022, Features = "Midsize Sedan, Comfortable" },
        new Car { Id = 19, BrandId = 5, Model = "Tahoe", Year = 2023, Features = "Full-Size SUV, Powerful" },
        new Car { Id = 20, BrandId = 5, Model = "Camaro", Year = 2020, Features = "Sport Coupe, Iconic" }
    );
}



   }