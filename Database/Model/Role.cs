using System.Collections.Generic;

namespace Database.Model
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }

        // Navigation Property
        public ICollection<User> Users { get; set; }
    }
}
