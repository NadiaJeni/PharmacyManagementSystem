using Database.Model;
using System;
using System.Collections.Generic;

namespace PharmacyManagementSystem.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public string Status { get; set; } // Pending, Approved, Delivered, Cancelled

        // Foreign Key
        public int UserId { get; set; }

        // Navigation Properties
        public User User { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
