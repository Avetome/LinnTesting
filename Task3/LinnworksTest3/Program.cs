using LinnworksTest3.PathFinders;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinnworksTest3
{
    class Program
    {
        static void Main(string[] args)
        {
            var start = new Location(2, 2);
            var finish = new Location(9, 9);

            var world = new World(10, 10);

            ConsoleMapDrawer.DrawMap(world.Map, start, finish);            

            var path = world.FindShortestWay(start, finish)?.ToList();

            if (path == null)
            {
                Console.WriteLine("Finish point unreacheable. Sad but true :)");
                Console.ReadKey();

                return;
            }

            Console.WriteLine(Environment.NewLine);
            Console.WriteLine($"Path from start({start.X}, {start.Y}) to finish({finish.X}, {finish.Y}):");
            path.ForEach(p => Console.WriteLine($"Point ({p.X}, {p.Y}). Possibility: {world.Map[p.X, p.Y]}"));

            Console.WriteLine(Environment.NewLine);

            ConsoleMapDrawer.DrawMap(world.Map, start, finish, false, path);

            Console.ReadLine();
        }

        /// <summary>
        /// For generate test cases
        /// </summary>
        /// <param name="sizeX"></param>
        /// <param name="sizeY"></param>
        private static void PrintRandomMap(int sizeX, int sizeY)
        {
            var rnd = new Random();

            for (int x = 0; x < sizeX; x++)
            {
                Console.Write("{ ");
                for (int y = 0; y < sizeY; y++)
                {
                    Console.Write($"{(byte)rnd.Next(0, 100)}, ");
                }
                Console.Write("},");
                Console.Write(Environment.NewLine);
            }
        }
    }
}
