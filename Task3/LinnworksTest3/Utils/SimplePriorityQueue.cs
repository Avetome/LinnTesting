using System;
using System.Collections.Generic;
using System.Linq;

namespace LinnworksTest3
{
    /// <summary>
    /// Very simple class.
    /// Not production ready.
    /// Not implemented collection interfaces.
    /// Not thread-safe, of course.
    /// Should not be used elsewhere except for demonstation ))
    /// </summary>
    public class SimplePriorityQueue
    {
        private List<PriorityQueueItem> _items;

        public SimplePriorityQueue()
        {
            _items = new List<PriorityQueueItem>();
        }

        public PriorityQueueItem Get()
        {
            if (IsEmpty())
            {
                throw new Exception("The queue is empty");
            }

            var item = _items.FirstOrDefault();

            _items.Remove(item);

            return item;
        }

        public void Insert(Location cell, ushort priority)
        {
            _items.Add(new PriorityQueueItem() { Cell = cell, Priority = priority });
            _items.Sort((a, b) => a.Priority - b.Priority);
        }

        public bool IsEmpty()
        {
            return !_items.Any();
        }

        public List<PriorityQueueItem> Items => _items;
    }

    public class PriorityQueueItem
    {
        public Location Cell;

        public ushort Priority;
    }
}
