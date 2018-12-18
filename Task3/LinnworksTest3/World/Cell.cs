using System.Diagnostics;

namespace LinnworksTest3
{
    [DebuggerDisplay("X = {X}, Y = {Y}, Passability = {Passability}")]
    public class Cell : Location
    {
        // Defines cell passability from 0 (can't go) to 100 (normal passability)
        // The higher is passability, the quicker it is possible to pass the cell
        public byte Passability;

        public Cell(int x, int y, byte passability)
            : base(x, y)
        {
            Passability = passability;
        }
    }
}
