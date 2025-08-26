namespace PharmacyManagementSystem.Models
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        // Foreign Keys
        public int OrderId { get; set; }
        public int MedicineId { get; set; }

        // Navigation Properties
        public Order Order { get; set; }
        public Medicine Medicine { get; set; }
    }
}
