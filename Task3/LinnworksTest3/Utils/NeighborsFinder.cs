using System;
using System.Collections.Generic;
using System.Text;

namespace LinnworksTest3
{
    public static class NeighborsFinder
    {
        public static Location[] Find(byte[,] map, int x, int y)
        {
            var result = new List<Location>();

            if (x - 1 >= 0)
            {
                result.Add(new Location(x - 1, y));
            }

            if (y - 1 >= 0)
            {
                result.Add(new Location(x, y - 1));
            }

            if (x + 1 < map.GetLength(1))
            {
                result.Add(new Location(x + 1, y));
            }

            if (y + 1 < map.GetLength(0))
            {
                result.Add(new Location(x, y + 1));
            }

            return result.ToArray();
        }
    }
}
