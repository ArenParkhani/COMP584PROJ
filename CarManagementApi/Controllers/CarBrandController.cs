using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class CarBrandController : ControllerBase
{
    private readonly ICarBrandService _carBrandService;
    private readonly IMapper _mapper;

    public CarBrandController(ICarBrandService carBrandService, IMapper mapper)
    {
        _carBrandService = carBrandService;
        _mapper = mapper;
    }

    // Fetch all car brands with the number of models
    [HttpGet]
    public async Task<IActionResult> GetCarBrands()
    {
        var carBrands = await _carBrandService.GetAllCarBrandsAsync();
        var carBrandDtos = _mapper.Map<List<CarBrandDTO>>(carBrands);
        return Ok(carBrandDtos);
    }

    // Fetch a single car brand by ID
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCarBrand(int id)
    {
        var carBrand = await _carBrandService.GetCarBrandByIdAsync(id);
        if (carBrand == null)
        {
            return NotFound();
        }
        var carBrandDto = _mapper.Map<CarBrandDTO>(carBrand);
        return Ok(carBrandDto);
    }

    // Create a new car brand
    [HttpPost]
    public async Task<IActionResult> CreateCarBrand([FromBody] CarBrandDTO carBrandDto)
    {
        if (carBrandDto == null || string.IsNullOrEmpty(carBrandDto.Name) || string.IsNullOrEmpty(carBrandDto.Country))
        {
            return BadRequest("Car brand name and country are required.");
        }

        var carBrand = _mapper.Map<CarBrand>(carBrandDto);
        await _carBrandService.AddCarBrandAsync(carBrand);

        var createdCarBrandDto = _mapper.Map<CarBrandDTO>(carBrand);
        return CreatedAtAction(nameof(GetCarBrand), new { id = carBrand.Id }, createdCarBrandDto);
    }

    // Update an existing car brand
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCarBrand(int id, [FromBody] CarBrandDTO carBrandDto)
    {
        if (id != carBrandDto.Id)
        {
            return BadRequest("Car brand ID mismatch.");
        }

        var carBrand = await _carBrandService.GetCarBrandByIdAsync(id);
        if (carBrand == null)
        {
            return NotFound();
        }

        _mapper.Map(carBrandDto, carBrand);
        await _carBrandService.UpdateCarBrandAsync(carBrand);

        return NoContent();
    }

    // Delete a car brand
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCarBrand(int id)
    {
        var carBrand = await _carBrandService.GetCarBrandByIdAsync(id);
        if (carBrand == null)
        {
            return NotFound();
        }

        await _carBrandService.DeleteCarBrandAsync(id);
        return NoContent();
    }
}