
using System;
using System.Collections.Generic;

namespace Database.Model
{
    public class User
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public DateTime CreatedAt { get; set; }

        // Foreign Key
        public int RoleId { get; set; }

        // Navigation Properties
        public Role Role { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
