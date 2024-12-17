using Microsoft.EntityFrameworkCore;

public class CarBrandService : ICarBrandService
{
    private readonly ApplicationDbContext _context; // Your database context

    public CarBrandService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<CarBrand>> GetAllCarBrandsAsync()
    {
        return await _context.CarBrands.Include(c => c.Cars).ToListAsync(); // Include Cars if needed
    }

    public async Task<CarBrand> GetCarBrandByIdAsync(int id)
    {
        return await _context.CarBrands.Include(c => c.Cars)
                                        .FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task AddCarBrandAsync(CarBrand carBrand)
{
    if (await _context.CarBrands.AnyAsync(cb => cb.Name == carBrand.Name))
    {
        throw new InvalidOperationException("Car brand already exists.");
    }

    await _context.CarBrands.AddAsync(carBrand);
    await _context.SaveChangesAsync();
}
    public async Task UpdateCarBrandAsync(CarBrand carBrand)
    {
        _context.CarBrands.Update(carBrand);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteCarBrandAsync(int id)
    {
        var carBrand = await _context.CarBrands.FindAsync(id);
        if (carBrand != null)
        {
            _context.CarBrands.Remove(carBrand);
            await _context.SaveChangesAsync();
        }
    }
}
