using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace LinnworksTest3
{
    [DebuggerDisplay("X = {X}, Y = {Y}")]
    public class Location
    {
        public int X;
        public int Y;

        public Location(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }

        public override int GetHashCode()
        {
            return X ^ Y;
        }

        public override bool Equals(object obj)
        {
            if (!(obj is Location))
            {
                return false;
            }                

            return Equals((Location)obj);
        }

        public bool Equals(Location other)
        {
            if (X != other.X)
                return false;

            return X == other.X && Y == other.Y;
        }

        public static bool operator ==(Location point1, Location point2)
        {
            return point1.Equals(point2);
        }

        public static bool operator !=(Location point1, Location point2)
        {
            return !point1.Equals(point2);
        }
    }
}
