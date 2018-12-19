using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreTest.Models
{
    public class ProductCategory
    {
        [JsonProperty("CategoryId")]
        public Guid Id { get; set; }

        [JsonProperty("CategoryName")]
        public string Name { get; set; }

        [JsonProperty("ProductsCount")]
        public uint ProductsCount { get; set; }
    }
}
