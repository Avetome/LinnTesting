using static LinnworksTest3.World;

namespace LinnworksTest3
{
    public interface IPathFinder
    {
        Location[] Find(byte[,] map, Location start, Location finish);
    }
}
