using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TechMart.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class TechMartController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            var products = new List<Product>
            {
                new Product { Name = "Smartphone", Price = 500, Condition = "Novo" },
                new Product { Name = "Tablet", Price = 300, Condition = "Usado" }
            };

            return products;
        }
    }

    public class Product
    {
        public string Name { get; set; } = null!;
        public decimal Price { get; set; }
        public string Condition { get; set; } = null!;
    }
}
