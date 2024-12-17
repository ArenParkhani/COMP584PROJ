using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

public class CarService : ICarService
{
    private readonly ApplicationDbContext _context;

    public CarService(ApplicationDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Car> GetAllCars()
    {
        return _context.Cars.Include(c => c.CarBrand).ToList(); // Include related CarBrand
    }

    public Car GetCarById(int id)
    {
        return _context.Cars.Include(c => c.CarBrand)
                            .FirstOrDefault(c => c.Id == id); // Find car by ID
    }

    public void AddCar(Car car)
    {
        _context.Cars.Add(car); // Add new car
        _context.SaveChanges(); // Save changes
    }

    public void UpdateCar(Car car)
    {
        _context.Cars.Update(car); // Update car
        _context.SaveChanges(); // Save changes
    }

    public void DeleteCar(int id)
    {
        var car = _context.Cars.Find(id); // Find car by ID
        if (car != null)
        {
            _context.Cars.Remove(car); // Remove car
            _context.SaveChanges(); // Save changes
        }
    }
    public List<Car> GetCarsByBrandId(int brandId)
    {
        return _context.Cars.Where(c => c.BrandId == brandId).ToList(); // Filter by brandId
    }
}
