using System.ComponentModel.DataAnnotations;

namespace TripsWebsiteAPI.Models.Users
{
    public class UserSqlModel
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string FirstName { get; set; } = string.Empty;
        [Required]
        public string LastName { get; set; } = string.Empty;
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
        [Required]
        public bool IsAdmin { get; set; } = false;

        public UserSqlModel() { }

        public UserSqlModel(User user)
        {
            Id = Guid.NewGuid().ToString();
            FirstName = user.Name?.FirstName ?? string.Empty;
            LastName = user.Name?.LastName ?? string.Empty;
            Email = user.Login.Email ?? string.Empty;
            Password = user.Login.Password ?? string.Empty;
            IsAdmin = user.IsAdmin;

        }
    }
}
