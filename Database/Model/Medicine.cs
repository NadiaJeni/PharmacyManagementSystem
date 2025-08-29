
using System;
using System.Collections.Generic;

namespace Database.Model
{
    public class Medicine
    {
        public int MedicineId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Manufacturer { get; set; }
        public DateTime CreatedAt { get; set; }

        // Navigation
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
