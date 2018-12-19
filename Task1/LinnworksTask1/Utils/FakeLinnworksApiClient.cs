using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreTest.Models;

namespace AngularCoreTest.Utils
{
    public class FakeLinnworksApiClient : ILinnworksApiClient
    {
        private List<ProductCategory> _categories = new List<ProductCategory>()
        {
            new ProductCategory() { Id = Guid.NewGuid(), Name = "Category1", ProductsCount = 2 },
            new ProductCategory() { Id = Guid.NewGuid(), Name = "Category2", ProductsCount = 42 },
            new ProductCategory() { Id = Guid.NewGuid(), Name = "Category3", ProductsCount = 23 },
        };

        public Task CreateCategory(string categoryName, Guid token)
        {
            var rnd = new Random();
            _categories.Add(new ProductCategory() { Id = Guid.NewGuid(), Name = categoryName, ProductsCount = (uint)rnd.Next(0, 100) });

            return Task.CompletedTask;
        }

        public Task DeleteCategoryById(Guid categoryId, Guid token)
        {
            _categories.RemoveAll(item => item.Id == categoryId);

            return Task.CompletedTask;
        }

        public Task<IEnumerable<ProductCategory>> GetCategories(Guid token)
        {
            return Task.FromResult<IEnumerable<ProductCategory>>(_categories);
        }

        public Task UpdateCategory(Guid categoryId, string categoryName, Guid token)
        {
            var existedCategory = _categories.FirstOrDefault(item => item.Id == categoryId);

            if (existedCategory == null)
            {
                throw new Exception("Can't find the category");
            }

            existedCategory.Name = categoryName;

            return Task.CompletedTask;
        }
    }
}
