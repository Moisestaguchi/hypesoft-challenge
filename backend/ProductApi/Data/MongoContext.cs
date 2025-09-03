using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ProductApi.Models;

namespace ProductApi.Data;

public class MongoContext
{
    public IMongoDatabase Database { get; }
    public IMongoCollection<Product> Products => Database.GetCollection<Product>("products");

    public MongoContext(IOptions<MongoDbSettings> settings)
    {
        var client = new MongoClient(settings.Value.ConnectionString);
        Database = client.GetDatabase(settings.Value.Database);
    }
}
