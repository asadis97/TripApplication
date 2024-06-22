using System.ComponentModel.DataAnnotations;

namespace TripsWebsiteAPI.Models.Users
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public Name Name { get; set; }
        [Required]
        public LoginModel Login { get; set; }

        [Required]
        public bool IsAdmin { get; set; }

        public User()
        {
            Id = Guid.NewGuid().ToString();
            Name = new Name();
            Login = new LoginModel();
        }

        public User(UserSqlModel userSqlModel)
        {
            Id = userSqlModel.Id;
            Name = new Name
            {
                FirstName = userSqlModel.FirstName,
                LastName = userSqlModel.LastName
            };
            Login = new LoginModel
            {
                Email = userSqlModel.Email,
                Password = userSqlModel.Password
            };
            IsAdmin = userSqlModel.IsAdmin;
        }

    }
}
