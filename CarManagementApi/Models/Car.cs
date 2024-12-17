public class Car
{
    public int Id { get; set; } // Primary key
    public int BrandId { get; set; } // Foreign key to CarBrand
    public string Model { get; set; }
    public int Year { get; set; }
    public string Features { get; set; }

    public CarBrand CarBrand { get; set; } // Navigation property
}
