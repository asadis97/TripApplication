using System.ComponentModel.DataAnnotations;

namespace TripsWebsiteAPI.Models.Users
{
    public class Name
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;
        [Required]
        public string LastName { get; set; } = string.Empty;
    }
}
