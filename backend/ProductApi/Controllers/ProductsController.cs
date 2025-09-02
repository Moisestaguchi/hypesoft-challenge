using Microsoft.AspNetCore.Mvc;
using ProductApi.Models;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            var products = new List<Product>
            {
                new Product { Id = 1, Name = "Notebook Gamer", Price = 4500.00 },
                new Product { Id = 2, Name = "Mouse Logitech", Price = 250.00 }
            };
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var product = new Product { Id = id, Name = $"Produto {id}", Price = 100.00 * id };
            return Ok(product);
        }
    }
}
