namespace TripsWebsiteAPI.Services.UserService
{
    public interface IUserService
    {
        public Task<List<User>> GetAllUsers();
        public Task<User> GetUser(string id);
        public Task<User> AddUser(User newUser);
        public Task DeleteUser(string id);
        public Task<User> Login(LoginModel loginModel);
        
    }
}
