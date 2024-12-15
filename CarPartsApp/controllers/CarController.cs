using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarPartsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CarController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/car
        [HttpGet]
        public async Task<IActionResult> GetCars()
        {
            try
            {
                var cars = await _context.Cars.Include(c => c.Parts).ToListAsync();
                return Ok(cars);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred while fetching cars.", Error = ex.Message });
            }
        }

        // POST: api/car
        [HttpPost]
        public async Task<IActionResult> CreateCar([FromBody] Car car)
        {
            if (car == null)
            {
                return BadRequest(new { Message = "Car object is null." });
            }

            try
            {
                _context.Cars.Add(car);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetCarById), new { id = car.Id }, car);
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, new { Message = "An error occurred while saving the car.", Error = ex.Message });
            }
        }

        // GET: api/car/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCarById(int id)
        {
            try
            {
                var car = await _context.Cars.Include(c => c.Parts).FirstOrDefaultAsync(c => c.Id == id);

                if (car == null)
                {
                    return NotFound(new { Message = $"Car with ID {id} not found." });
                }

                return Ok(car);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred while fetching the car.", Error = ex.Message });
            }
        }

        // DELETE: api/car/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            try
            {
                var car = await _context.Cars.FindAsync(id);
                if (car == null)
                {
                    return NotFound(new { Message = $"Car with ID {id} not found." });
                }

                _context.Cars.Remove(car);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred while deleting the car.", Error = ex.Message });
            }
        }
    }
}
