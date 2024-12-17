using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CarController : ControllerBase
{
    private readonly ICarService _carService; // Service to handle business logic
    private readonly IMapper _mapper; // AutoMapper for mapping

    public CarController(ICarService carService, IMapper mapper)
    {
        _carService = carService;
        _mapper = mapper;
    }

    // GET: api/Car
    [HttpGet]
    public IActionResult GetCars()
    {
        var cars = _carService.GetAllCars(); // Fetch all cars
        var carDtos = _mapper.Map<List<CarDTO>>(cars); // Map to DTOs
        return Ok(carDtos); // Return as response
    }

    // GET: api/Car/{id}
    [HttpGet("{id}")]
    public IActionResult GetCar(int id)
    {
        var car = _carService.GetCarById(id); // Fetch car by ID
        if (car == null)
        {
            return NotFound(); // Return 404 if not found
        }
        var carDto = _mapper.Map<CarDTO>(car); // Map to DTO
        return Ok(carDto); // Return as response
    }

    // POST: api/Car
[HttpPost]
public IActionResult CreateCar([FromBody] CarDTO carDto)
{
    if (carDto == null || string.IsNullOrEmpty(carDto.Model) || carDto.Year <= 0 || string.IsNullOrEmpty(carDto.Features) || carDto.BrandId <= 0)
    {
        return BadRequest("All fields are required, and Year and BrandId must be valid.");
    }

    var car = _mapper.Map<Car>(carDto);
    _carService.AddCar(car);
    var createdCarDto = _mapper.Map<CarDTO>(car);
    return CreatedAtAction(nameof(GetCar), new { id = car.Id }, createdCarDto);
}

    // PUT: api/Car/{id}
    [HttpPut("{id}")]
    public IActionResult UpdateCar(int id, [FromBody] CarDTO carDto)
    {
        if (id != carDto.Id)
        {
            return BadRequest("Car ID mismatch."); // Validate ID
        }

        var existingCar = _carService.GetCarById(id); // Fetch existing car
        if (existingCar == null)
        {
            return NotFound("Car not found."); // Return 404 if not found
        }

        _mapper.Map(carDto, existingCar); // Map updated properties to the existing entity
        _carService.UpdateCar(existingCar); // Update car in the database
        return NoContent(); // Return no content response
    }

    // DELETE: api/Car/{id}
    [HttpDelete("{id}")]
    public IActionResult DeleteCar(int id)
    {
        var existingCar = _carService.GetCarById(id); // Fetch existing car
        if (existingCar == null)
        {
            return NotFound("Car not found."); // Return 404 if not found
        }

        _carService.DeleteCar(id); // Delete car from the database
        return NoContent(); // Return no content response
    }

    // GET: api/Car/ByBrand/{brandId}
    [HttpGet("ByBrand/{brandId}")]
    public IActionResult GetCarsByBrand(int brandId)
    {
        var cars = _carService.GetCarsByBrandId(brandId); // Fetch cars by brand ID
        if (cars == null || cars.Count == 0)
        {
            return NotFound("No cars found for the specified brand."); // Return 404 if no cars found
        }
        var carDtos = _mapper.Map<List<CarDTO>>(cars); // Map to DTOs
        return Ok(carDtos); // Return as response
    }
}