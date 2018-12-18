using LinnworksTest3;
using LinnworksTest3.PathFinders;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace LinnworksTest3Tests
{
    /// <summary>
    /// TODO: Move test examples for all algoritms to one place
    /// </summary>
    [Collection("A* PathFinder Tests")]
    public class AStarPathFinderTest
    {
        [Fact(DisplayName = "A* search in 3x3 map")]
        public void TestOn3x3Map()
        {
            byte[,] map = new byte[3, 3] {
                { 1, 2, 3, },
                { 3, 4, 2, },
                { 5, 6, 5, },
            };

            var start = new Location(0, 0);
            var finish = new Location(2, 2);

            var pathFinder = new AStarPathFinder();

            var path = pathFinder.Find(map, start, finish).ToList();

            var result = new List<Location>()
            {
                new Location(2, 1),
                new Location(2, 0),
                new Location(1, 0),
                new Location(0, 0),
            };

            Assert.Equal(result, path);
        }

        [Fact(DisplayName = "A* search in 5x5 map")]
        public void TestOn5x5Map()
        {
            byte[,] map = new byte[5, 5] {
                { 1, 2, 7, 6, 7 },
                { 3, 4, 5, 4, 6 },
                { 5, 6, 3, 6, 2 },
                { 7, 8, 2, 2, 6 },
                { 7, 8, 6, 2, 6 },
            };

            var start = new Location(0, 0);
            var finish = new Location(4, 4);

            var pathFinder = new AStarPathFinder();

            var path = pathFinder.Find(map, start, finish).ToList();

            var result = new List<Location>()
            {
                new Location(4, 3),
                new Location(4, 2),
                new Location(4, 1),
                new Location(3, 1),
                new Location(3, 0),
                new Location(2, 0),
                new Location(1, 0),
                new Location(0, 0),
            };

            Assert.Equal(result, path);
        }

        [Fact(DisplayName = "A* search in 5x5 map with almost wall")]
        public void TestOn5x5MapWithAlmostWall()
        {
            byte[,] map = new byte[5, 5] {
                { 1, 2, 0, 6, 7 },
                { 3, 4, 3, 4, 6 },
                { 5, 6, 0, 6, 2 },
                { 7, 8, 0, 2, 6 },
                { 7, 8, 0, 2, 6 },
            };

            var start = new Location(0, 0);
            var finish = new Location(4, 4);

            var pathFinder = new AStarPathFinder();

            var path = pathFinder.Find(map, start, finish).ToList();

            var result = new List<Location>()
            {
                new Location(3, 4),
                new Location(3, 3),
                new Location(2, 3),
                new Location(1, 3),
                new Location(1, 2),
                new Location(1, 1),
                new Location(1, 0),
                new Location(0, 0),
            };

            Assert.Equal(result, path);
        }

        [Fact(DisplayName = "A* search in 5x5 map with wall")]
        public void TestOn5x5MapWithWall()
        {
            byte[,] map = new byte[5, 5] {
                { 1, 2, 0, 6, 7 },
                { 3, 4, 0, 4, 6 },
                { 5, 6, 0, 6, 2 },
                { 7, 8, 0, 2, 6 },
                { 7, 8, 0, 2, 6 },
            };

            var start = new Location(0, 0);
            var finish = new Location(4, 4);

            var pathFinder = new AStarPathFinder();

            var path = pathFinder.Find(map, start, finish)?.ToList();

            Assert.Null(path);
        }
    }
}
