public class Car
{
    public int Id { get; set; }
    public string Brand { get; set; }
    public string Model { get; set; }
    
    public virtual ICollection<Part> Parts { get; set; }
}
