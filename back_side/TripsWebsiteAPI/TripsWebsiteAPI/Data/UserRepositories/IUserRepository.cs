using TripsWebsiteAPI.Models.Users;

namespace TripsWebsiteAPI.Data.UserRepositories
{
    public interface IUserRepository
    {
        public Task<List<User>> GetAllUsers();
        public Task<User?> GetUser(string id);
        public Task<bool> AddUser(User newUser);
        public Task<bool> DeleteUser(string id);
        public Task<User?> GetUserByEmail(string loginModel);
    }
}
