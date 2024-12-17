public class CarBrand
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Country { get; set; }
    public ICollection<Car> Cars { get; set; } // Navigation property
}