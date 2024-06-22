using System.ComponentModel.DataAnnotations;

namespace TripsWebsiteAPI.Models.Users
{
    public class LoginModel
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}

