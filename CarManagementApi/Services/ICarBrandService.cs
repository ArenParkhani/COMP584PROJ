public interface ICarBrandService
{
    Task<IEnumerable<CarBrand>> GetAllCarBrandsAsync();
    Task<CarBrand> GetCarBrandByIdAsync(int id);
    Task AddCarBrandAsync(CarBrand carBrand);
    Task UpdateCarBrandAsync(CarBrand carBrand);
    Task DeleteCarBrandAsync(int id);
}
