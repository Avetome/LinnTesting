using AngularCoreTest.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace AngularCoreTest.Utils
{
    public class LinnworksApiClient : ILinnworksApiClient
    {
        private const string AuthorizationHeader = "Authorization";
        private readonly HttpClient _client;

        private struct ApiUrls
        {
            public const string ExecuteCustomScriptQuery = "Dashboards/ExecuteCustomScriptQuery";

            public const string GetCategories = "Inventory/GetCategories";

            public const string CreateCategory = "Inventory/CreateCategory";

            public const string UpdateCategory = "Inventory/UpdateCategory";

            public const string DeleteCategoryById = "Inventory/DeleteCategoryById";
        }

        public LinnworksApiClient(HttpMessageHandler httpMessageHandler = null)
        {
            if (httpMessageHandler == null)
            {
                _client = new HttpClient();
            }
            else
            {
                _client = new HttpClient(httpMessageHandler);
            }

            _client.BaseAddress = new Uri("http://eu.linnworks.net/api/");

            _client.DefaultRequestHeaders.TryAddWithoutValidation("Host", "eu.linnworks.net");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Connection", "keep-alive");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Accept", "application/json, text/javascript, */*; q=0.01");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Origin", "https://www.linnworks.net");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Language", "en");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Referer", "https://www.linnworks.net/");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Encoding", "gzip, deflate, br");
            _client.DefaultRequestHeaders.TryAddWithoutValidation("Connection", "keep-alive");
        }

        public async Task<IEnumerable<ProductCategory>> GetCategories(Guid token)
        {
            var formData = new Dictionary<string, string>
            {
                { "script", @"
                    SELECT PC.CategoryId, PC.CategoryName, ProductsCount = 
                            (SELECT COUNT(*) FROM [StockItem] AS SI WHERE SI.CategoryId = PC.CategoryId)
                    FROM ProductCategories AS PC" }
            };


            var response = await ExecuteHttpRequest(ApiUrls.ExecuteCustomScriptQuery, formData, token);

            var searchResults = await DeserializeCategoriesListFromStreamAsync(await response.Content.ReadAsStreamAsync());

            return searchResults;
        }

        public async Task CreateCategory(string categoryName, Guid token)
        {
            var formData = new Dictionary<string, string>
            {
                { "CategoryName", categoryName }
            };

            await ExecuteHttpRequest(ApiUrls.CreateCategory, formData, token);
        }

        public async Task UpdateCategory(Guid categoryId, string categoryName, Guid token)
        {
            var formData = new Dictionary<string, string>
            {
                { "Category", $"{{'CategoryId':'{categoryId.ToString()}','CategoryName':'{categoryName}'}}" },
            };

            await ExecuteHttpRequest(ApiUrls.UpdateCategory, formData, token);
        }

        public async Task DeleteCategoryById(Guid categoryId, Guid token)
        {
            var formData = new Dictionary<string, string>
            {
                { "CategoryId", categoryId.ToString() }
            };

            await ExecuteHttpRequest(ApiUrls.DeleteCategoryById, formData, token);
        }

        private async Task<HttpResponseMessage> ExecuteHttpRequest(string apiUrl, Dictionary<string, string> formData, Guid token)
        {
            var request = new HttpRequestMessage(HttpMethod.Post, apiUrl)
            {
                Content = new FormUrlEncodedContent(formData)
            };

            return await ExecuteHttpRequest(request, token);
        }

        private async Task<HttpResponseMessage> ExecuteHttpRequest(HttpRequestMessage request, Guid token)
        {
            request.Headers.Add(AuthorizationHeader, token.ToString());

            var response = await _client.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                var errorStr = await response.Content.ReadAsStringAsync();
                var error = JsonConvert.DeserializeObject<LinnworksErrorResponse>(errorStr);

                throw new LinnworksHttpException(error.Message, response.StatusCode);
            }

            return response;
        }

        private async Task<List<ProductCategory>> DeserializeCategoriesListFromStreamAsync(Stream stream)
        {
            if (stream == null || stream.CanRead == false)
            {
                return null;
            }

            using (var sr = new StreamReader(stream))
            using (var jsonReader = new JsonTextReader(sr))
            {
                while (await jsonReader.ReadAsync())
                {
                    if (jsonReader.TokenType == JsonToken.PropertyName
                        && (string)jsonReader.Value == "Results")
                    {
                        await jsonReader.ReadAsync();

                        var serializer = new JsonSerializer();
                        return serializer.Deserialize<List<ProductCategory>>(jsonReader);
                    }
                }
            }

            return null;
        }

        private class LinnworksErrorResponse
        {
            public string Code { get; set; }

            public string Message { get; set; }
        }
    }

    /// <summary>
    /// TODO: in classic Web API we can use System.Web.HttpException.
    /// </summary>
    public class LinnworksHttpException : Exception
    {
        public LinnworksHttpException(string message, HttpStatusCode httpStatusCode)
            : base(message)
        {
            HttpStatusCode = httpStatusCode;
        }

        public HttpStatusCode HttpStatusCode { get; set; }
    }
}
