using ProductApi.Models;

namespace ProductApi.Repositories;

public interface IProductRepository
{
    Task<List<Product>> GetAllAsync();
    Task<Product?> GetByIdAsync(string id);
    Task<Product> CreateAsync(Product product);
    Task<bool> UpdateAsync(string id, Product product);
    Task<bool> DeleteAsync(string id);
}
