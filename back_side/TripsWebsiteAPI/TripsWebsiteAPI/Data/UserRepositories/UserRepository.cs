using TripsWebsiteAPI.Data.DBContext;
using TripsWebsiteAPI.Helpers;
using Microsoft.EntityFrameworkCore;


namespace TripsWebsiteAPI.Data.UserRepositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> AddUser(User newUser)
        {
            newUser.Id = Guid.NewGuid().ToString();
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == newUser.Login.Email);

            if (existingUser != null)
            {
                return false;
            }

            newUser.Login.Password = PasswordHelper.GeneratePassword(newUser.Login.Password);
            var userSqlModel = new UserSqlModel(newUser);
            _context.Users.Add(userSqlModel);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteUser(string id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return false;
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return true;

        }

        public async Task<List<User>> GetAllUsers()
        {
            var userSqlModels = await _context.Users.ToListAsync();
            var users = new List<User>();

            foreach (var userSqlModel in userSqlModels) 
            {
                var user = new User(userSqlModel);
                users.Add(user);
            }
            return users;
        }

        public async Task<User?> GetUser(string id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return null;
            }

            return new User(user);
        }

        public async Task<User?> GetUserByEmail(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                return null;
            }

            return new User(user);
        }


    }
}
