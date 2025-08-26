using Database.Model;
using System.Collections.Generic;

namespace PharmacyManagementSystem.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }

        // Navigation Property
        public ICollection<User> Users { get; set; }
    }
}
