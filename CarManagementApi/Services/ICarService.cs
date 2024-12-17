public interface ICarService
{
    IEnumerable<Car> GetAllCars(); // Retrieve all cars
    Car GetCarById(int id);        // Retrieve a car by its ID
    void AddCar(Car car);          // Add a new car
    void UpdateCar(Car car);       // Update an existing car
    void DeleteCar(int id);        // Delete a car by its ID
    List<Car> GetCarsByBrandId(int brandId); // New method
}
