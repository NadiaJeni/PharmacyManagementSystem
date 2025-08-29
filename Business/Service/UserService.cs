using Database.Context;
using Database.Model;

using System.Linq;
using Business.DTOs;

namespace Business.Service
{
    public class UserService
    {
        private readonly PharmacyDbContext _context;

        // Dependency Injection এর মাধ্যমে DbContext পাওয়া যাবে
        public UserService(PharmacyDbContext context)
        {
            _context = context;
        }

        // ========== Registration ==========
        public bool Register(RegistrationForm form)
        {
            // Check duplicate email
            if (_context.Users.Any(u => u.Email == form.Email))
                return false;

            // Map DTO -> Entity
            var user = new User
            {
                FullName = form.FullName,
                Email = form.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(form.Password),
                RoleId = form.RoleId
            };

            _context.Users.Add(user);
            _context.SaveChanges();
            return true;
        }

        // ========== Login ==========
        public User Login(LoginForm form)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == form.Email);
            if (user == null) return null;

            // Password check
            if (BCrypt.Net.BCrypt.Verify(form.Password, user.PasswordHash))
                return user;

            return null;
        }
    }
}
