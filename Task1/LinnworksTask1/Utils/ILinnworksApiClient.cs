using AngularCoreTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreTest.Utils
{    
    public interface ILinnworksApiClient
    {
        Task<IEnumerable<ProductCategory>> GetCategories(Guid token);

        Task CreateCategory(string categoryName, Guid token);

        Task UpdateCategory(Guid categoryId, string categoryName, Guid token);

        Task DeleteCategoryById(Guid categoryId, Guid token);
    }
}
