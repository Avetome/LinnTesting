using AngularCoreTest.Models;
using AngularCoreTest.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace AngularCoreTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ILinnworksApiClient _linnworksApiClient;

        public CategoriesController(ILinnworksApiClient linnworksApiClient)
        {
            _linnworksApiClient = linnworksApiClient;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var token = (Guid)HttpContext.Items["Authorization"];

            var result = await _linnworksApiClient.GetCategories(token);

            return new JsonResult(result) { StatusCode = StatusCodes.Status200OK };
        }

        [Consumes("application/json")]
        [HttpPost]
        public async Task<IActionResult> CreateCategory(ProductCategory category)
        {
            throw new NotImplementedException();
        }

        [HttpPut("{idString}")]
        public async Task<IActionResult> UpdateCategory([FromBody] ProductCategory category, string idString)
        {
            if (!Guid.TryParse(idString, out var id))
            {
                return new JsonResult(new { }) { StatusCode = StatusCodes.Status400BadRequest };
            }

            category.Id = id;

            var token = (Guid)HttpContext.Items["Authorization"];

            await _linnworksApiClient.UpdateCategory(id, category.Name, token);

            return new StatusCodeResult(StatusCodes.Status200OK);
        }

        [HttpDelete("{idString}")]
        public async Task<IActionResult> DeleteCategory(string idString)
        {
            throw new NotImplementedException();
        }
    }
}
