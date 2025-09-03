using MongoDB.Bson;
using MongoDB.Driver;
using ProductApi.Data;
using ProductApi.Models;

namespace ProductApi.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly MongoContext _ctx;

    public ProductRepository(MongoContext ctx)
    {
        _ctx = ctx;
    }

    public async Task<List<Product>> GetAllAsync() =>
        await _ctx.Products.Find(FilterDefinition<Product>.Empty).ToListAsync();

    public async Task<Product?> GetByIdAsync(string id) =>
        ObjectId.TryParse(id, out var _) 
            ? await _ctx.Products.Find(p => p.Id == id).FirstOrDefaultAsync()
            : null;

    public async Task<Product> CreateAsync(Product product)
    {
        await _ctx.Products.InsertOneAsync(product);
        return product;
    }

    public async Task<bool> UpdateAsync(string id, Product product)
    {
        product.Id = id;
        var result = await _ctx.Products.ReplaceOneAsync(p => p.Id == id, product);
        return result.MatchedCount > 0;
    }

    public async Task<bool> DeleteAsync(string id)
    {
        var result = await _ctx.Products.DeleteOneAsync(p => p.Id == id);
        return result.DeletedCount > 0;
    }
}
