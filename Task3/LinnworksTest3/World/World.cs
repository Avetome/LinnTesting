using LinnworksTest3.PathFinders;
using System;

namespace LinnworksTest3
{
    public class World
    {
        private byte[,] _map; // World map
        private readonly int _sizeX;
        private readonly int _sizeY;

        public World(int sizeX, int sizeY)
        {
            var rnd = new Random();

            _sizeX = sizeX;
            _sizeY = sizeY;

            _map = new byte[sizeX, sizeY];

            // Build map and randomly set passability for each cell
            for (int x = 0; x < sizeX; x++)
            {
                for (int y = 0; y < sizeY; y++)
                {
                    _map[x, y] =(byte)rnd.Next(0, 100);
                }
            }
        }

        public World(byte[,] map)
        {
            _sizeX = map.GetLength(1);
            _sizeY = map.GetLength(0);

            _map = map;
        }

        public Cell GetXYCell(int x, int y)
        {
            if (x < 0 || x >= _sizeX)
            {
                throw new IndexOutOfRangeException(nameof(x));
            }

            if (y < 0 || x >= _sizeY)
            {
                throw new IndexOutOfRangeException(nameof(y));
            }

            return new Cell(x, y, _map[x, y]);
        }

        public int SizeX => _sizeX;

        public int SizeY => _sizeY;

        public byte[,] Map => _map;

        public Location[] FindShortestWay(Location start, Location finish)
        {
            // TODO: In real project we could use DI.
            var pathFinder = new DijkstraPathFinder();
            // var pathFinder = new AStarPathFinder();

            return pathFinder.Find(Map, start, finish);
        }
    }
}
