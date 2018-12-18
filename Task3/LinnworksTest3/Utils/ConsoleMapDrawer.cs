using System;
using System.Collections.Generic;
using System.Linq;
using static LinnworksTest3.World;

namespace LinnworksTest3
{
    public static class ConsoleMapDrawer
    {
        private const ConsoleColor NormalColor = ConsoleColor.White;
        private const ConsoleColor StartColor = ConsoleColor.Cyan;
        private const ConsoleColor FinishColor = ConsoleColor.Green;
        private const ConsoleColor PathColor = ConsoleColor.Yellow;
        private const ConsoleColor NotVisitedColor = ConsoleColor.DarkGray;

        /// <summary>
        /// Draw world map.
        /// </summary>
        /// <param name="map">Byte's 2D array with world map.</param>
        /// <param name="start">Start location.</param>
        /// <param name="finish">Finish location.</param>
        /// <param name="invertPossibility">Invert possibility for better visual path checking.</param>
        /// <param name="path">Path from start to finihs.</param>
        public static void DrawMap(byte[,] map, Location start, Location finish, bool invertPossibility = false, List<Location> path = null)
        {
            ConsoleColor color = NormalColor;

            for (var x = 0; x < map.GetLength(0); x++)
            {
                for (var y = 0; y < map.GetLength(1); y++)
                {
                    if (x == start.X && y == start.Y)
                    {
                        color = StartColor;
                    }
                    else if (x == finish.X && y == finish.Y)
                    {
                        color = FinishColor;
                    }
                    else if (path != null && path.Any(c => c.X == x && c.Y == y))
                    {
                        color = PathColor;
                    }
                    else if (map[x, y] == 0)
                    {
                        color = NotVisitedColor;
                    }

                    var possibility = map[x, y];

                    if (invertPossibility && possibility != 0)
                    {
                        possibility = (byte)(100 - possibility);
                    }

                    PrintNumberWithColor(possibility, color);

                    color = NormalColor;
                }

                Console.Write(Environment.NewLine);
            }

            Console.Write(Environment.NewLine);
        }

        public static void DrawDebugCostMap(ushort[,] map, Location start, Location finish)
        {
            var color = NormalColor;

            for (var x = 0; x < map.GetLongLength(1); x++)
            {
                for (var y = 0; y < map.GetLongLength(0); y++)
                {
                    if (x == start.X && y == start.Y)
                    {
                        color = StartColor;
                    }
                    else if (x == finish.X && y == finish.Y)
                    {
                        color = FinishColor;
                    }
                    else if (map[x, y] == 0)
                    {
                        color = NotVisitedColor;
                    }

                    PrintNumberWithColor(map[x, y], color);

                    color = NormalColor;
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
    }
}
