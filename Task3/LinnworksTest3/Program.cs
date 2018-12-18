using LinnworksTest3.PathFinders;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinnworksTest3
{
    class Program
    {
        private const int startX = 0;
        private const int startY = 0;
        private const int finishX = 4;
        private const int finishY = 4;

        static void Main(string[] args)
        {
            var start = new Location(startX, startY);
            var finish = new Location(finishX, finishY);
            
            var world = new World(10, 10);

            ConsoleMapDrawer.DrawMap(world.Map, start, finish);            

            var pathFinder = new DijkstraPathFinder();

            var path = pathFinder.Find(world.Map, start, finish)?.ToList();

            if (path == null)
            {
                Console.WriteLine("Finish point unreacheable. Sad but true :)");
                Console.ReadKey();

                return;
            }

            Console.WriteLine($"Path from start({startX}, {startY}) to finish({finishX}, {finishY}):");
            path.ForEach(p => Console.WriteLine($"Point ({p.X}, {p.Y}). Possibility: {world.Map[p.X, p.Y]}"));

            Console.WriteLine(Environment.NewLine);

            ConsoleMapDrawer.DrawMap(world.Map, start, finish, false, path);

            Console.ReadLine();
        }

        private static Cell[] GetNeighbors(World world, int x, int y)
        {
            var result = new List<Cell>();

            if (x - 1 >= 0)
            {
                result.Add(world.GetXYCell(x - 1, y));
            }

            if (y - 1 >= 0)
            {
                result.Add(world.GetXYCell(x, y - 1));
            }

            if (x + 1 < world.SizeX)
            {
                result.Add(world.GetXYCell(x + 1, y));
            }

            if (y + 1 < world.SizeY)
            {
                result.Add(world.GetXYCell(x, y + 1));
            }

            return result.ToArray();
        }

        private static void DrawWorld(World world, List<Cell> path = null)
        {
            ConsoleColor color = ConsoleColor.White;

            for (var x = 0; x < world.SizeY; x++)
            {
                for (var y = 0; y < world.SizeY; y++)
                {
                    if (x == startX && y == startY)
                    {
                        color = ConsoleColor.Cyan;
                    }
                    else if (x == finishX && y == finishY)
                    {
                        color = ConsoleColor.Green;
                    }
                    else if (path != null && path.Any(c => c.X == x && c.Y == y))
                    {
                        color = ConsoleColor.Yellow;
                    }

                    PrintNumberWithColor(world.GetXYCell(x, y).Passability, color);

                    color = ConsoleColor.White;
                }

                Console.Write(Environment.NewLine);
            }

            Console.Write(Environment.NewLine);
        }

        private static void PrintNumberWithColor(int number, ConsoleColor color = ConsoleColor.White)
        {
            var prevColor = Console.ForegroundColor;
            Console.ForegroundColor = color;

            Console.Write($"{number.ToString().PadLeft(3, ' ')} ");

            Console.ForegroundColor = prevColor;
        }

        private static void DrawAvailableMap(ushort[,] arr)
        {
            var color = ConsoleColor.White;

            for (var x = 0; x < arr.GetLongLength(1); x++)
            {
                for (var y = 0; y < arr.GetLongLength(0); y++)
                {
                    if (x == startX && y == startY)
                    {
                        color = ConsoleColor.Cyan;
                    }
                    else if (x == finishX && y == finishY)
                    {
                        color = ConsoleColor.Green;
                    }
                    else if (arr[x, y] == 0)
                    {
                        color = ConsoleColor.DarkGray;
                    }

                    PrintNumberWithColor(arr[x, y], color);

                    color = ConsoleColor.White;
                }

                Console.Write(Environment.NewLine);
            }

            Console.Write(Environment.NewLine);
        }
    }
}
