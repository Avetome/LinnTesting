using System;
using System.Collections.Generic;

namespace LinnworksTest3.PathFinders
{
    /// <summary>
    /// Can be generic, but too lazy )
    /// </summary>
    public class DijkstraPathFinder : IPathFinder
    {
        public Location[] Find(byte[,] map, Location start, Location finish)
        {
            if (start == finish)
            {
                throw new ArgumentException("Start and finish can't be the same");
            }

            if (start.X < 0 || start.X >= map.GetLength(0)
                || start.Y < 0 || start.Y >= map.GetLength(1))
            {
                throw new ArgumentException(nameof(start));
            }

            if (finish.X < 0 || finish.X >= map.GetLength(0)
                || finish.Y < 0 || finish.Y >= map.GetLength(1))
            {
                throw new ArgumentException(nameof(finish));
            }

            var availableMap = new ushort[map.GetLength(0), map.GetLength(1)];

            availableMap[start.X, start.Y] = 100;

            bool isFinish = false;

            var frontier = new SimplePriorityQueue();

            frontier.Insert(start, 0);

            var comeFrom = new Dictionary<(int x, int y), Location>();

            var cheapestPath = int.MaxValue;

            var iterationsCount = 0;

            while (!isFinish)
            {
                var currentCell = frontier.Get();

                var pathCost = availableMap[currentCell.Cell.X, currentCell.Cell.Y];

                // if cheapest path from frontier cost more,
                // than already finded cheapest way to finish -
                // no more reason to continue calculating.
                if (pathCost > cheapestPath)
                {
                    isFinish = true;
                }

                var neighbors = NeighborsFinder.Find(map, currentCell.Cell.X, currentCell.Cell.Y);

                foreach (var neighbor in neighbors)
                {
                    var passability = map[neighbor.X, neighbor.Y];
                    if (passability == 0)
                    {
                        continue;
                    }

                    var neighborCost = 100 - passability;
                    var cheapestCostOnNeighbor = availableMap[neighbor.X, neighbor.Y];

                    var currentPathCost = (ushort)(pathCost + neighborCost);

                    if (cheapestCostOnNeighbor == 0 || currentPathCost < cheapestCostOnNeighbor)
                    {
                        availableMap[neighbor.X, neighbor.Y] = currentPathCost;
                        comeFrom[(neighbor.X, neighbor.Y)] = currentCell.Cell;

                        if (neighbor == finish)
                        {
                            cheapestPath = currentPathCost;
                        }
                        else
                        {
                            frontier.Insert(neighbor, currentPathCost);
                        }
                    }
                }

                if (frontier.IsEmpty())
                {
                    isFinish = true;
                }

                iterationsCount++;

                // ConsoleMapDrawer.DrawDebugCostMap(availableMap, start, finish);
            }

            if (cheapestPath == int.MaxValue)
            {
                return null;
            }

            var path = new List<Location>();

            bool isStartReached = false;

            var location = finish;

            while (!isStartReached)
            {
                location = comeFrom[(location.X, location.Y)];

                if (location.X == start.X && location.Y == start.Y)
                {
                    isStartReached = true;
                }

                path.Add(location);
            }

            Console.WriteLine($"Iteration count: {iterationsCount}");

            return path.ToArray();
        }        
    }
}
