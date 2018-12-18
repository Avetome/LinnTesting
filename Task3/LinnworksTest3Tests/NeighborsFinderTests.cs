using LinnworksTest3;
using Xunit;

namespace LinnworksTest3Tests
{
    public class NeighborsFinderTests
    {
        [Fact(DisplayName = "Find neighbors for location in middle of the map")]
        public void Find4Neighbors()
        {
            var map = new byte[3, 3] {
                { 1, 2, 3, },
                { 3, 4, 2, },
                { 5, 6, 5, },
            };

            var pointX = 1;
            var pointY = 1;

            var neighbors = NeighborsFinder.Find(map, pointX, pointY);

            Assert.Equal(4, neighbors.Length);
            Assert.Contains(neighbors, n => n.X == pointX - 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX + 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX && n.Y == pointY - 1);
            Assert.Contains(neighbors, n => n.X == pointX && n.Y == pointY + 1);
        }

        [Fact(DisplayName = "Find neighbors for location on X frontier")]
        public void Find3NeighborsXAxis()
        {
            var map = new byte[3, 3] {
                { 1, 2, 3, },
                { 3, 4, 2, },
                { 5, 6, 5, },
            };

            var pointX = 1;
            var pointY = 0;

            var neighbors = NeighborsFinder.Find(map, pointX, pointY);

            Assert.Equal(3, neighbors.Length);
            Assert.Contains(neighbors, n => n.X == pointX - 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX + 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX && n.Y == pointY + 1);
        }

        [Fact(DisplayName = "Find neighbors for location on Y frontier")]
        public void Find3NeighborsYAxis()
        {
            var map = new byte[3, 3] {
                { 1, 2, 3, },
                { 3, 4, 2, },
                { 5, 6, 5, },
            };

            var pointX = 1;
            var pointY = 0;

            var neighbors = NeighborsFinder.Find(map, pointX, pointY);

            Assert.Equal(3, neighbors.Length);
            Assert.Contains(neighbors, n => n.X == pointX - 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX + 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX && n.Y == pointY + 1);
        }

        [Fact(DisplayName = "Find neighbors for location in corner")]
        public void Find2Neighbors()
        {
            var map = new byte[3, 3] {
                { 1, 2, 3, },
                { 3, 4, 2, },
                { 5, 6, 5, },
            };

            var pointX = 2;
            var pointY = 2;

            var neighbors = NeighborsFinder.Find(map, pointX, pointY);

            Assert.Equal(2, neighbors.Length);
            Assert.Contains(neighbors, n => n.X == pointX - 1 && n.Y == pointY);
            Assert.Contains(neighbors, n => n.X == pointX && n.Y == pointY - 1);
        }
    }
}
